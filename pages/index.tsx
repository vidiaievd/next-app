import { useState } from 'react';
import axios from 'axios';
import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Title</Htag>
			<Button appearance="primary" arrow='right'>Click me</Button>
			<Button appearance="ghost" arrow='right'>Click me</Button>
			<Paragraph size="large">Large</Paragraph>
			<Paragraph>Medium</Paragraph>
			<Paragraph size="small">Small</Paragraph>
			<Tag size="small">Ghost</Tag>
			<Tag size="medium" color="red">Red</Tag>
			<Tag size="small" color="green">Green</Tag>
			<Tag color="primary">Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}