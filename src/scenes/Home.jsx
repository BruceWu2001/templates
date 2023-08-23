import { Box, Typography,Button } from "@mui/material"
import { generateColors } from "../initialSettings"


const Home = () => {
    const colors = generateColors()
    return (
    <section className="relative w-full h-full flex flex-col" >
        <Typography>hello</Typography>
        <Box className="bg-primary w-full h-1/2 flex flex-col justify-center items-center">
            <Typography>home</Typography>

            <Button href="/example" variant="contained" className="bg-tertiary">Example</Button>
        </Box>
    </section>
    )
}

export default Home;