import './index.scss'
import Section from '../../components/Section'
import ContactForm from '../../components/ContactForm'

function Contact() {

  return (
    <main>
      <Section className={"contact"} title="Me contacter">
         <ContactForm />
      </Section>
    </main>
  )
}

export default Contact
