import { Box, Typography } from "@mui/material"
import { generateColors } from "../initialSettings"


const Home = () => {
    const colors = generateColors()
    return (
    <section className="relative w-full flex flex-col" >
        <Typography>hello</Typography>
        <Box className="bg-primary">
            <Typography>home</Typography>
        </Box>
    </section>
    )
}

export default Home;