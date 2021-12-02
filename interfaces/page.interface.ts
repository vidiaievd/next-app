export enum TopPageCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	_id: string;
	count: string;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface TopPageModel {
	tags: string;
	_id: string;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopPageCategory;
	advantages: TopPageAdvantage[];
	createAt: Date;
	updateAt: Date;
	hh: HhData;
}