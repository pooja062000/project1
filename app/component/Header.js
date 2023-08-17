import Link from "next/link"

export default function Header() {
    return (

        <>
        
<div className='outer'>

<div className='logo'>POOJA</div>
<div className='nav-barr'>
<Link href='/home'> Home </Link>
<Link href='about'> About </Link> 
<Link href='services'> Services </Link> 
<Link href='contact'> Contact </Link>
</div>
</div>
        </>
    )
}