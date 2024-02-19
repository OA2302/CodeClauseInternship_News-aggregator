import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
    const newsAppStyle = {
        display: "flex",
        justifyContent: "center"
    };

    const newsItemStyle = {
        width: "500px",
        padding: "20px",
        border: "1px solid",
        marginBottom: "20px"
    };

    const newsImgStyle = {
        width: "400px"
    };

    return (
        <div style={newsAppStyle}> 
            <div style={newsItemStyle}> 
                <img style={newsImgStyle} src={urlToImage} alt={title}/> 
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;
