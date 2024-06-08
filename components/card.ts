"use client"
import styled from "styled-components";
export const Box = styled.div`
    width: 200px;
    height: 150px;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
export const PrimaryBox = styled(Box)`
    background-color: var(--primary);
    color: var(--on-primary);
`
export const PrimaryContainerBox = styled(Box)`
    background-color: var(--primary-container);
    color: var(--on-primary-container);
`
export const SecondaryBox = styled(Box)`
    background-color: var(--secondary);
    color: var(--on-secondary);
`
export const SecondaryContainerBox = styled(Box)`
    background-color: var(--secondary-container);
    color: var(--on-secondary-container);
`
export const TertiaryBox = styled(Box)`
    background-color: var(--tertiary);
    color: var(--on-tertiary);
`
export const TertiaryContainerBox = styled(Box)`
    background-color: var(--tertiary-container);
    color: var(--on-tertiary-container);
`
export const ErrorBox = styled(Box)`
    background-color: var(--error);
    color: var(--on-error);
`
export const ErrorContainerBox = styled(Box)`
    background-color: var(--error-container);
    color: var(--on-error-container);
`
export const SurfaceDimBox = styled(Box)`
    background-color: var(--surface);
    color: var(--on-surface);
`
export const SurfaceBrightBox = styled(Box)`
    background-color: var(--surface-bright);
    color: var(--on-surface);
`
export const SurfaceContainerLowestBox = styled(Box)`
    background-color: var(--surface-container-lowest);
    color: var(--on-surface);
    border: 3px solid var(--outline-variant);
`
export const SurfaceContainerLowBox = styled(Box)`
    background-color: var(--surface-container-low);
    color: var(--on-surface);
    border: 5px solid var(--outline-variant);
`
export const SurfaceContainerBox = styled(Box)`
    background-color: var(--surface-container);
    color: var(--surface-variant);
`
export const SurfaceContainerHighBox = styled(Box)`
    background-color: var(--surface-container-high);
    color: var(--on-surface-variant);
    border: 5px solid var(--outline);
`
export const SurfaceContainerHighestBox = styled(Box)`
    background-color: var(--surface-container-highest);
    color: var(--on-surface-variant);
    border: 5px solid var(--outline);
`
