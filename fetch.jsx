const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("age", formData.age);
    formDataObj.append("file", formData.file);

    try {
        const response = await fetch("http://127.0.0.1:5000/submit", {
            method: "POST",
            body: formDataObj,
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
    }
};
