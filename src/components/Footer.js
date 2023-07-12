import React from 'react'
import './Footer.css'
import { useForm, ValidationError } from '@formspree/react';

function Footer() {
    return (
        <div className='FooterContainer' id="Footer">
            <div id="Contact"></div>
            <h1>Contact Me!</h1>
            <span><b>internship opportunities for software engineering</b> so feel free to reach out to me</span>
            <div className="FooterContent">
                <ContactForm />
            </div>
        </div>
    )
}

function ContactForm() {
    const [state, handleSubmit] = useForm("mgejwkbp");
    if (state.succeeded) {
        return <div className="FooterSubmit">Thank you for contacting me! I hope to get back to you within a couple days. Checkout me out on my other socials as well!</div>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="firstName">
                    First Name *
                </label>

                <label htmlFor="lastName">
                    Last Name *
                </label>

                <input required id="firstName" type="text" name="firstName" />

                <ValidationError
                    prefix="First Name"
                    field="firstName"
                    errors={state.errors}
                />

                <input required id="lastName" type="text" name="lastName" />

                <ValidationError
                    prefix="Last Name"
                    field="lastName"
                    errors={state.errors}
                />
            </div>

            <label htmlFor="email">
                Email *
            </label>

            <input
                id="email"
                type="email address"
                name="email"
            />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="message">
                Send me a message!
            </label>
            <textarea
                id="message"
                name="message"
            />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default Footer