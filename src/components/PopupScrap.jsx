import React, { useState, useEffect } from "react";
import { ScrapItem } from "components";
import axios from "axios";
import { getThumbnail, fbUploadData, fbUploadStorage, fbUpdateData } from "../lib/firebase";

// field
const COL = "scrapItems";
const FORMINIT = {
	url: "",
	title: "",
	image: "",
	description: "",
	tag: [],
	type: "",
	createdAt: null,
	updatedAt: null,
	author: "",
	useFb: false
};

const PopupScrap = (props) => {
	const [form, setForm] = useState(FORMINIT);
	const [tag, setTag] = useState("");
	const [file, setFile] = useState();
	// add author
	useEffect(() => {
		setForm((n) => {
			return {
				...n,
				author: props.author
			};
		});
	}, [props.author]);

	const getHtml = async (url) => {
		const ogObj = await axios.get(`/api/scrap?url=${url}`);
		return ogObj.data;
	};

	const handleCheckClick = async () => {
		const ogs = await getHtml(form.url);
		setForm((n) => {
			return {
				...n,
				title: ogs.title,
				image: ogs.image,
				description: ogs.description
			};
		});

		if (ogs.image) {
			setFile(null);
		}
	};

	const handleFormChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setForm((n) => {
			return {
				...n,
				[key]: value
			};
		});
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
			getThumbnail(e.target, getLocalImage);
		}
	};

	const getLocalImage = (_, url) => {
		setForm((form) => {
			return {
				...form,
				image: url
			};
		});
	};

	const handleTagChange = (e) => {
		setTag(e.target.value);
	};

	const handleAddTag = () => {
		setForm((f) => {
			const newArr = f.tag;
			newArr.push(tag);
			return {
				...f,
				tag: newArr
			};
		});
		setTag("");
	};

	const handleDeleteTag = (id) => {
		setForm((n) => {
			return {
				...n,
				tag: n.tag.filter((t, index) => index !== id)
			};
		});
	};

	const handleScrap = async () => {
		console.log("handleScrap");
		let newItem = null;
		if (!file) {
			newItem = {
				...form,
				image: {
					fileUrl: form.image,
					prevFile: null
				}
			};
			await fbUploadData(COL, newItem);
		} else {
			const id = await fbUploadData(COL, { ...form, useFb: true });
			const image = await fbUploadStorage(`${COL}/${id}`, file.name, file);
			newItem = {
				...form,
				image
			};
			await fbUpdateData(COL, id, newItem);
		}
	};

	const handleCancleClick = () => {
		setForm(FORMINIT);
		props.handleAddBtnClick();
	};

	return (
		<div className={props.hidePopupScrap ? "PopupScrap" : "PopupScrap animationOpcity"}>
			<div className="wrap-popup">
				<div className="popup-contents">
					<h3> scrap </h3>
					<form id="form-scrap" className="form-scrap">
						<ScrapItem title="url" type="url" value={form.url} thumbnail={form.image} eventChange={handleFormChange} handleImageChange={handleImageChange} handleCheckClick={handleCheckClick} />
						<ScrapItem title="team" type="check" eventChange={handleFormChange} />
						<ScrapItem title="title" type="text" value={form.title} eventChange={handleFormChange} />
						<ScrapItem title="description" type="textArea" value={form.description} eventChange={handleFormChange} />
						<ScrapItem title="tag" type="tag" scrapType={form.type} value={tag} addTag={handleAddTag} deleteTag={handleDeleteTag} handleTextChange={handleTagChange} tagArr={form.tag} />
					</form>
				</div>
				<div className="popup-btn">
					<p className="btn-scrap-cancle" onClick={handleCancleClick}>
						취소
					</p>
					<p className="btn-scrap-text" onClick={handleScrap}>
						스크랩
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopupScrap;
