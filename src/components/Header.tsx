import { Link } from 'react-router-dom'
import { Head } from '../styles'
export default function Header() {
    return (
        <Head>
            <h1>Bem-Vindo ao CNAB</h1>
            <Link to="/upload-file">Upload ficheiro</Link>
        </Head>
    )
}