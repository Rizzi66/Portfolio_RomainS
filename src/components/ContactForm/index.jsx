import './index.scss'

function ContactForm() {
  return (
    <form onSubmit={""}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Description</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          cols={100}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
