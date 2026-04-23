import {ChangeEvent, FormEvent, useState} from "react";
import NavBar from "../components/NavBar.tsx";
import Button from "../components/Button.tsx";
import styles from "../css/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Contact request failed");
        }
        return response.json();
      })
      .then(() => {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      <NavBar />
      <main className={styles.contactPage}>
        <section className={styles.contactIntro}>
          <p className={styles.eyebrow}>Free estimate</p>
          <h1>Tell me what you want to build.</h1>
          <p>
            Share the basics: the type of project, location on Vancouver Island, rough timeline, and any photos or
            measurements you already have. You will get a clear next step.
          </p>

          <div className={styles.contactNotes}>
            <span>Decks</span>
            <span>Pergolas</span>
            <span>Fences</span>
            <span>Outdoor structures</span>
          </div>
        </section>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Project details
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={7}
              placeholder="Example: cedar privacy fence in Nanaimo, roughly 60 ft, hoping to build this spring."
            />
          </label>

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Request"}
          </Button>

          {status === "sent" && <p className={styles.success}>Thanks. Your request has been sent.</p>}
          {status === "error" && <p className={styles.error}>The message could not be sent. Please try again.</p>}
        </form>
      </main>
    </>
  );
}
