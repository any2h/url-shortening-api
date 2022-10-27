import { useState, useRef } from "react"
import styled from "styled-components"
import Button from "./Button"
import ShortLink from "./ShortLink"

const StyledShortener = styled.div`
    position: relative;
    top: -76px;

    form {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1.5rem;
        background-color: ${({theme}) => theme.colors.veryDarkPurple};
        border-radius: 10px;

        &.error {
            input {
                box-shadow: inset 0 0 0 2px ${({theme}) => theme.colors.red};
            }

            span {
                display: block;
            }
        }

        input {
            height: 48px;
            border-radius: 5px;
            border: 0;
            text-indent: 1rem;
        }

        span {
            display: none;
            font-size: .75rem;
            color: ${({theme}) => theme.colors.red};
            margin-block: -.4rem -.05rem;
            font-style: italic;
        }

        button {
            font-size: ${({theme}) => theme.fontSizes.md1};
            width: 100%;
            height: 48px;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media ${({theme}) => theme.laptop} {
        left: 0;
        right: 0;

        form {
            flex-direction: row;
            padding: 3.25rem 4rem;
            gap: 1.5rem;

            input {
                width: 100%;
                font-size: ${({theme}) => theme.fontSizes.md2};
                height: 64px;
                text-indent: 2rem;
            }

            span {
                position: absolute;
                font-size: ${({theme}) => theme.fontSizes.reg};
                left: 4rem;
                bottom: 1.25rem;
            }

            button {
                min-width: 188px;
                max-width: 188px;
                height: 64px;
                font-size: ${({theme}) => theme.fontSizes.md2};
            }
        }

        ul {
            gap: 1rem;
        }
    }
`

const baseURL = 'https://api.shrtco.de/v2/shorten?url='

const Shortener = () => {
    const [name, setName] = useState('')
    const [links, setLinks] = useState([])
    const [error, setError] = useState(false)
    const formRef = useRef(null)
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || name.endsWith('.')) {
            setError(true)
            return
        }

        (async () => {
            try {
                const response = await fetch(baseURL + name)

                if (response.ok) {
                    const data = await response.json()
                    // console.log(data)
                    setLinks(prevState => 
                        [{ id: data.result.code, isCopied: false, ...data.result }, ...prevState]
                    )
                } else {
                    throw new Error('error')
                }
            } catch (error) {
                setError(true)
                console.log(error);
            }
        })()
    }

    const handleChange = (e) => {
        setError(false)
        setName(e.target.value);
    }

    return (
        <StyledShortener>
            <form 
                onSubmit={handleSubmit} 
                ref={formRef}
                className={error ? 'error' : null}
            >
                <input 
                    type="text" 
                    placeholder="Shorten a link here..."
                    value={name}
                    onChange={handleChange}
                />
                {error && <span>Please add a link</span>}
                <Button 
                    text="Shorten It!" 
                    // width="279px"
                    borderRad="5px"
                />
            </form>
            <ul>
                {links.map((link, i) => 
                    <ShortLink
                        key={i}
                        id={link.id}
                        isCopied={link.isCopied}
                        orig={link.original_link}
                        short={link.short_link3}
                        setLinks={setLinks}
                    />
                )}
            </ul>
        </StyledShortener>
    )
}

export default Shortener
