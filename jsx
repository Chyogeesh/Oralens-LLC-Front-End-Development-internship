const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file" && files[0]) {
        const file = files[0];
        if (file.size > 2 * 1024 * 1024) {
            alert("File size must be less than 2MB");
            return;
        }
        if (!["image/jpeg", "image/png"].includes(file.type)) {
            alert("Only JPEG and PNG files are allowed");
            return;
        }
        setFormData((prev) => ({ ...prev, file }));
    } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
};
