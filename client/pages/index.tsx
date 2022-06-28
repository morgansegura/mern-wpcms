import { FC } from 'react'
// [Core]
import { Container } from '@core/layout/container'
import { Typography } from '@core/data-display/typography'
// [Components]
import { Layout } from '@components/layouts'


const Home: FC = () => {
	return (
		<Layout>
			<Container contain="xl">
				<Typography as="h1" view="h1">Home Page</Typography>
				<Typography view="h2">Home Page</Typography>
				<Typography view="h3">Home Page</Typography>
				<Typography view="h4">Home Page</Typography>
				<Typography view="h5">Home Page</Typography>
				<Typography view="body-large">Home Page</Typography>
				<Typography view="body-bold">Home Page</Typography>
				<Typography view="body-small">Home Page</Typography>
				<Typography view="cta">Home Page</Typography>
				<Typography view="label">Home Page</Typography>
				<Typography view="tag-base">Home Page</Typography>
				<Typography view="tag-important">Home Page</Typography>
				<Typography view="tag-bold">Home Page</Typography>
				<Typography>
					Jalapeño cayenne Thai super chili sesame soba noodles raspberries lemon red lentil soup
					banana butternut mix golden cayenne pepper summer green papaya salad cookies creamiest
					crumbled lentils appetizer lentils Italian linguine puttanesca a delicious meal.
					Mediterranean hearts of palm chilies Thai sun pepper cilantro lime vinaigrette red
					grapes lime mango crisp veggie burgers pasta dark and stormy zesty tofu pad thai
					enchiladas sweet potato quinoa flatbread cremini mushrooms kale Mexican fiesta onion.
					One bowl vine tomatoes pesto basil Bolivian rainbow pepper delightful blueberry scones
					green tea lime plums arugula salad street style Thai basil tacos.
				</Typography>
			</Container>
		</Layout>
	)
}

export default Home
