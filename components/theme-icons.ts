import styled from "styled-components";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export const ThemeToggleConainer = styled.div`
    display: flex;
    align-self: flex-end;
`

export const SunIcon = styled(TbSunFilled)`
    color: white;
    cursor: pointer;
`

export const MoonIcon = styled(TbMoonFilled)`
    color: black;
    cursor: pointer;
`