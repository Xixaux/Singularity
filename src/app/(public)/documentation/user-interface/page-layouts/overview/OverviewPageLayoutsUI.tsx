'use client';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

/**
 * The OverviewPageLayoutsUI component offers an introduction to the page layouts available in Singularity React.
 */
function OverviewPageLayoutsUI() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Page Layouts
            </Typography>

            <section className="prose prose-sm dark:prose-invert">
                <Typography
                    variant="h5"
                    className="text-2xl font-bold mb-4"
                >
                    Introduction
                </Typography>
                <Typography paragraph>
                    Singularity React's page layouts are pre-built, customizable templates that serve as the foundation for your application's pages. They offer a blend of consistency and adaptability, allowing you to efficiently create user interfaces while maintaining a uniform design and experience across your application.
                </Typography>

                <Typography
                    variant="h6"
                    className="text-xl font-semibold mt-6 mb-4"
                >
                    Key Benefits
                </Typography>
                <ul>
                    <li>
                        <strong>Consistency:</strong> Ensure a unified look and navigation flow throughout your application, enhancing user experience.
                    </li>
                    <li>
                        <strong>Efficiency:</strong> Accelerate development with pre-designed, rigorously tested layouts.
                    </li>
                    <li>
                        <strong>Flexibility:</strong> Easily adapt and extend layouts to meet specific project requirements.
                    </li>
                    <li>
                        <strong>Maintainability:</strong> Simplify future updates with a well-organized, standardized structure.
                    </li>
                </ul>

                <Typography
                    variant="h6"
                    className="text-xl font-semibold mt-6 mb-4"
                >
                    Using Page Layouts
                </Typography>
                <Typography paragraph>
                    Page layouts in Singularity React are designed for simplicity and ease of integration. Choose the appropriate layout component and customize it to fit your needs. This approach enables rapid prototyping and development while ensuring a cohesive user interface across your application.
                </Typography>
            </section>

            <section className="mt-8">
                <Typography
                    variant="h5"
                    className="text-2xl font-bold mb-4"
                >
                    Available Page Layout Components
                </Typography>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                        <Link
                            to="/documentation/user-interface/page-layouts/simple/full-width"
                            className="text-blue-500 hover:underline"
                        >
                            SingularitySimpleLayout
                        </Link>
                        - A versatile layout crafted for general-purpose pages.
                    </li>
                    <li className="mb-2">
                        <Link
                            to="/documentation/user-interface/page-layouts/CardLayout/with-sidebars"
                            className="text-blue-500 hover:underline"
                        >
                            SingularityPageCardLayout
                        </Link>
                        - A layout featuring a distinct card-based content area.
                    </li>
                </ul>
            </section>

            <Typography
                paragraph
                className="mt-8"
            >
                Explore the documentation for each layout component to learn more about their specific features and implementation guidelines. Leveraging these pre-built layouts can significantly boost your development productivity and help you craft consistent, user-friendly interfaces with ease.
            </Typography>
        </>
    );
}

export default OverviewPageLayoutsUI;