import { useRef } from 'react'
import styled from 'styled-components'
import Container from './utils/Container'
import Logo from './Logo'
import Button from './Button'

const StyledHeader = styled.header`
    position: relative;
    height: 33px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    font-size: ${({ theme }) => theme.fontSizes.md1};
    color: white;
    font-weight: 700;

    .logo {
        margin-right: 45px;
    }

    .mobile-menu {
        z-index: 10;
        position: absolute;
        top: 175%;
        display: flex;
        width: 100%;
        height: 383px;
        flex-direction: column;
        padding: 40px 24px;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.veryDarkPurple};
        border-radius: 10px;
        opacity: 0;
        visibility: hidden;
        transition: all .225s ease-in-out;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        .nav {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            gap: 30px;

            li {
                transition: color .2s ease-in-out;

                &:hover {
                    color: ${({ theme }) => theme.colors.gray};
                }
            }
        }

        .login-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #585267;

            > :first-child {
                border: 0;
                background: transparent;
                color: inherit;
                transition: color .2s ease-in-out;

                &:hover {
                    color: ${({ theme }) => theme.colors.gray};
                }
            }

            > :last-child {
                width: 279px;
                height: 48px;
                font-size: inherit;
            }
        }
    }

    .nav-toggle {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 24px;
        height: 21px;

        &.active {
            > :nth-child(1) {
                transform-origin: 0px 2px;
                rotate: 45deg;
            }
            > :nth-child(2) {
                opacity: 0;
            }
            > :nth-child(3) {
                rotate: -45deg;
                transform-origin: 0px 0px;
            }
        }

        > span {
            width: 24px;
            height: 3px;
            background-color: ${({ theme }) => theme.colors.gray};
            transition: all .225s ease-in-out;
        }
    }

    @media ${({theme}) => theme.laptop} {
        height: 40px;
        align-items: center;
        color: ${({ theme }) => theme.colors.gray};
        font-size: ${({ theme }) => theme.fontSizes.sm};

        .mobile-menu {
            position: static;
            flex-direction: row;
            justify-content: space-between;
            height: auto;
            opacity: 1;
            visibility: visible;
            padding: 0;
            background: transparent;

            .nav {
                flex-direction: row;

                li:hover {
                    color: ${({ theme }) => theme.colors.obsidian};
                }
            }

            .login-group {
                flex-direction: row;
                gap: 37px;
                margin-top: 0;
                padding-top: 0;
                border: 0;

                > :first-child {
                    transition: color .2s ease-in-out;

                    &:hover {
                        color: ${({ theme }) => theme.colors.obsidian};
                    }
                }

                > :last-child {
                    width: 105px;
                    height: 40px;
                }
            }
        }

        .nav-toggle {
            display: none;
        }
    }
`

const Header = () => {
    const navRef = useRef(null)

    const openMenu = (e) => {
        e.currentTarget.classList.toggle('active');
        navRef.current.classList.toggle('active');
    }

    return (
        <Container>
            <StyledHeader>
                <Logo />
                <div className='mobile-menu' ref={navRef}>
                    <nav>
                        <ul className='nav'>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </nav>

                    <div className="login-group">
                        <button>Login</button>
                        <Button
                            text='Sign Up'
                        />
                    </div>
                </div>

                <div className="nav-toggle" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </StyledHeader>
        </Container>
    )
}

export default Header
