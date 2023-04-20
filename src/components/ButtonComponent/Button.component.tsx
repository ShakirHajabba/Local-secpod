import React from "react";
import { Button } from "@mui/material";
interface ButtonProps {
	onClick?: () => void;
	buttonText: string;

	variant?: "text" | "outlined" | "contained";
	className?: string;
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset";
}
const ButtonComponent: React.FC<ButtonProps> = ({
	variant,
	onClick,
	buttonText,
	fullWidth,
	className,
	type,
}) => {
	return (
		<Button
			variant={variant}
			onClick={onClick}
			type={type}
			fullWidth={fullWidth}
			className={className}
		>
			{buttonText}
		</Button>
	);
};

export default ButtonComponent;
