import { useParams } from "react-router-dom";

export default function Redirect() {

    const {link} = useParams();

    window.location.replace("/news" + link);
}