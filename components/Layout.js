import BackToTop from './BackToTop';

const Layout = (props) => {
	return (
		<div>
			{props.children}
			<BackToTop />
		</div>
	);
};

export default Layout;