import Pokeball from '../../assets/pokeball.png'

export const Navbar = () => {
    return (
        <div>
            <div>
                <a>
                    <img src={Pokeball} />
                    <span>About the project</span>
                </a>
            </div>
        </div>
    )
}