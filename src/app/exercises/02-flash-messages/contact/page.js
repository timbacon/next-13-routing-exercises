'use client';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { ToastContext } from '../../../../components/ToastProvider/ToastProvider';

function ContactPage() {
    const router = useRouter();
    const { createToast } = useContext(ToastContext);

    const handleSubmit = event => {
        event.preventDefault();

        router.push('/exercises/02-flash-messages');
        createToast(
            "Your message was received. We'll get back to you shortly",
            'success'
        );
    };
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' required={true} />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' />

                <button>Submit</button>
            </form>
        </main>
    );
}

export default ContactPage;
