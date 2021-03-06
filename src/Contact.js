import phoneicon from './images/phone-icon.png'
import mailicon from './images/mail-icon.png'
import './App.css'
export default function Contact(props) {
    
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneicon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailicon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// DESTRUCTURED WAY
// export default function Contact({img, name, phone, email}) {
//     return (
//         <div className="contact-card">
//             <img src={img}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }