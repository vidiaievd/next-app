import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({ size = "medium", className, children, ...prop }: ParagraphProps): JSX.Element => {

	return <p className={cn(styles.p, className, {
		[styles.small]: size === 'small',
		[styles.medium]: size === 'medium',
		[styles.large]: size === 'large',
	})}
		{...prop}
	>
		{children}
	</p>;

};
