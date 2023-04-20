import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
interface featuresCardProps {
	heading: string;
	subHeading: Array<string>;
	featuresText: string;
	buttonText: string;
	path: string;
	id: Number;
	features: Array<string>;
}
const FeaturesCardComponent: React.FC<featuresCardProps> = ({
	heading,
	subHeading,
	featuresText,
	features,
	buttonText,
	path,
	id,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const cardStyle = {
		backgroundColor: isHovered ? "#012f51" : "#ffffff",
		boxShadow: isHovered
			? "0 2px 10px 2px rgba(2, 15, 28, 0.3)"
			: "0 2px 10px 2px rgba(100, 100, 100, 0.3)",
		transition: "background-color 0.9s ease-in-out",
	};

	const headingStyle = {
		color: isHovered ? "#ebf6ff" : "var(--primaryColor)",
		transition: "color 0.9s ease-in-out",
	};

	const subheadingStyle = {
		backgroundColor: isHovered ? "#e9f8ea" : "#ebf6ff",
		border: isHovered
			? "solid 0.5px  var(--secondaryColor)"
			: "solid 0.5px var(--primaryColor)",
		transition: "color 0.9s ease-in-out",
	};

	const subHeadingStyleSpan = {
		color: isHovered ? "var(--secondaryColor)" : "var(--primaryColor)",
	};

	const featuresTextStyle = {
		color: isHovered ? " var(--buttonTextColor)" : "var(--textColor)",
		transition: "color 0.9s ease-in-out",
	};

	const contentsSpan = {
		color: isHovered ? " var(--lightPara)" : "var(--darkPara)",
	};

	const buttonTextStyle = {
		color: isHovered ? "var(--white)" : "var(--primaryColor)",
	};
	const buttonStyle = {
		backgroundColor: isHovered ? "var(--secondaryColor)" : "var(--white)",
		border: isHovered ? "none" : "solid 1px var(--primaryColor)",
	};

	return (
		<div
			className="sanerNowCardContents"
			style={cardStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={id === 4 ? "ribbon" : " "}>
				<section>
				<span className={id===4?"ribbon3":""}>{id===4?"Most Popular":""}</span>
				</section>
			</div>


			<div className={"heading"} style={headingStyle}>
				{heading}
			</div>

			<div className={id === 4 ? "card2SubContents" : "subContents"}>
				{subHeading.map((ele, i) => {
					return (
						<div
							className={"sub-headings"}
							style={subheadingStyle}
						>
							<span style={subHeadingStyleSpan}>
								{ele}
							</span>
						</div>
					);
				})}
			</div>
			<div className={"featuresText"} style={featuresTextStyle}>
				{featuresText}
			</div>
			<div className="features">
				{features.map((ele, i) => {
					return (
						<div className={"contents"}>
							<div
								className={
									isHovered
										? "circlehover"
										: "circle-with-tick"
								}
							></div>
							<span style={contentsSpan}>{ele}</span>
						</div>
					);
				})}
			</div>
			<div className={"buttons"} style={buttonStyle}>
				<Link
					className={"buttonContentSection"}
					to={path}
					style={buttonTextStyle}
				>
					{buttonText}
				</Link>
			</div>

		</div>
	);
};

export default FeaturesCardComponent;
