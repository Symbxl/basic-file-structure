import styled from "styled-components"

interface Props {
  text: string
}

export const Button = ({ text }: Props) => <StyleButton>{text}</StyleButton>

const StyleButton = styled.button`

`

