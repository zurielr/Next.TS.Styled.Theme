"use client"
import {  
    PrimaryBox, 
    PrimaryContainerBox, 
    SecondaryBox, 
    SecondaryContainerBox, 
    TertiaryBox, 
    TertiaryContainerBox,
    ErrorBox,
    ErrorContainerBox,
    SurfaceDimBox,
    SurfaceBrightBox,
    SurfaceContainerLowestBox,
    SurfaceContainerLowBox,
    SurfaceContainerBox,
    SurfaceContainerHighBox,
    SurfaceContainerHighestBox,
} from "@/components/card";
import { Container } from "@/components/container";
import { useTheme } from "next-themes";
import { 
    SunIcon,
    MoonIcon,
    ThemeToggleConainer,
} from "@/components/theme-icons"


export default function ThemePage() {
    const { resolvedTheme, setTheme } = useTheme();

    function handleThemeChange() {
        if(resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    return (
        <main>
            <Container>
                <ThemeToggleConainer>
                    <SunIcon 
                        size={50}
                        onClick={handleThemeChange}
                        data-hide-on-theme='light'
                    />
                    <MoonIcon 
                        size={50}
                        onClick={handleThemeChange}
                        data-hide-on-theme='dark'
                    />
                </ThemeToggleConainer>
            </Container>
            <Container>
                <PrimaryBox>
                    <h1>Primary</h1>
                    <p>The primary color of the app on Dark mode.</p>
                </PrimaryBox>
                <PrimaryContainerBox>
                    <h1>Primary</h1>
                    <p>The primary color of the app on Light mode.</p>
                </PrimaryContainerBox>
                <SecondaryBox>
                    <h1>Secondary</h1>
                    <p>Secondary color of the app on dark mode.</p>
                </SecondaryBox>
                <SecondaryContainerBox>
                    <h1>Secondary</h1>
                    <p>Secondary color of the app on light mode.</p>
                </SecondaryContainerBox>
                <TertiaryBox>
                    <h1>Tertiary</h1>
                    <p>Tertiary color of the app on dark mode.</p>
                </TertiaryBox>
                <TertiaryContainerBox>
                    <h1>Tertiary</h1>
                    <p>Tertiary color of the app on light mode.</p>
                </TertiaryContainerBox>
                <ErrorBox>
                    <h1>Error</h1>
                    <p>The error color of the app on dark mode.</p>
                </ErrorBox>
                <ErrorContainerBox>
                    <h1>Error</h1>
                    <p>The error color of the app on light mode.</p>
                </ErrorContainerBox>
                <SurfaceDimBox>
                    <h1>Dim</h1>
                    <p>Dim Surface</p>
                </SurfaceDimBox>
                <SurfaceBrightBox>
                    <h1>Bright Box</h1>
                    <p>This is the brightest box in the neutrals</p>
                </SurfaceBrightBox>
                <SurfaceContainerLowestBox>
                    <h1>Surface</h1>
                    <p>Surface container at the lowest intensity.</p>
                </SurfaceContainerLowestBox>
                <SurfaceContainerLowBox>
                    <h1>Surface</h1>
                    <p>Surface container at low intensity.</p>
                </SurfaceContainerLowBox>
                <SurfaceContainerBox>
                    <h1>Surface</h1>
                    <p>Surface container at medium intensity.</p>
                </SurfaceContainerBox>
                <SurfaceContainerHighBox>
                    <h1>Surface</h1>
                    <p>Surface container at high intensity.</p>
                </SurfaceContainerHighBox>
                <SurfaceContainerHighestBox>
                    <h1>Surface</h1>
                    <p>Surface container at the highest intensity.</p>
                </SurfaceContainerHighestBox>
            </Container>
        </main>
    )
}
