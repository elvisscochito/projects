import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import ButtonComponent from "../components/Button";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

import { createUser } from "../services/api";

import "../styles/LoginForm.css";

import { playerLogin } from "../services/api";

const SignUp = () => {

    const srcImg = `/assets/img/sr-logo.jpeg`;

	const form = useRef();
	const navigate = useNavigate();
	const [invalidLoginModal, setInvalidLoginModal] = React.useState(false);

	// user creation result
	const [creationResult, setCreationResult] = React.useState("");
	const [creationModal, setCreationModal] = React.useState(false);

	const register = async (e) => {
		e.preventDefault();
		const username = form.current.elements["user"].value;
		const password = form.current.elements["password"].value;
		const confirmPassword = form.current.elements["confirmPassword"].value;

		if (password !== confirmPassword) {
			setCreationResult("Password doesn't match");
			setCreationModal(true);
		} else {
			const data = await createUser({ username, password });

			if (data.status === "CREATED") {
				setCreationResult("User created successfully");
				setCreationModal(true);
			} else {
				let reason = "User creation failed";
				if (data.status === "NAME_TAKEN") {
					reason = "Username taken";
				}
				setCreationResult(reason);
				setCreationModal(true);
			}
			console.debug(data.status);
		}

		const data = await playerLogin({ username, password });
		if (data.error) {
			console.log(data.error);
			return;
		}
		
		if (data.status === "SUCCESS" && data.token) {
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", username);
			
			navigate("/home", { replace: true });
		} else if (data.status === "INVALID_LOGIN") {
			setInvalidLoginModal(true);
		}
	};

	return (
	<Container id="main-container" className="formBody d-grid h-100">

		<Form
			ref={form}
			/* onSubmit={handleSubmit} */
			id="sign-in-form"
			className="w-100 text-center"
		>
			<img
			src={srcImg}
			width="1000"
			height="1000"
			alt="Escape from Reality Logo"
			className="login-logo mb-4"
			/>
			<Form.Group className="mb-2">
			<Form.Control
				type="text"
				placeholder="Username"
				name="user"
				required
			/>
			</Form.Group>
			<Form.Group className="mb-2">
			<Form.Control
				type="password"
				placeholder="Password"
				name="password"
				required
			/>
			</Form.Group>
			<Form.Group className="mb-2">
			<Form.Control
				type="password"
				placeholder="Confirm password"
				name="confirmPassword"
				required
			/>
			</Form.Group>

			<ButtonComponent Buttonfunction={register} buttonText="Continue" classStyle="button w-100 mt-2"/>
			
		</Form>

	<Modal
		show={invalidLoginModal}
		onHide={() => setInvalidLoginModal(false)}
	>
		<Modal.Header closeButton>
			<Modal.Title>Invalid Login</Modal.Title>
		</Modal.Header>

		<Modal.Body>
			<p>
				Please check your username and password and try again. If you still
				have issues, please contact the administrator.
			</p>
		</Modal.Body>

		<Modal.Footer>
			<Button
				variant="secondary"
				onClick={() => setInvalidLoginModal(false)}
			>
				Close
			</Button>
		</Modal.Footer>
	</Modal>

	<Modal show={creationModal} onHide={() => setCreationModal(false)}>
		<Modal.Header closeButton>
			<Modal.Title>{creationResult}</Modal.Title>
		</Modal.Header>
		
		<Modal.Footer>
			<Button variant="secondary" onClick={() => setCreationModal(false)}>
				Close
			</Button>
		</Modal.Footer>
	</Modal>
	
	</Container>
	);
};

export default SignUp;
