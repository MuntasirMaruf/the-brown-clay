type HeadingProps = {
    title: string;
    subtitle: string;
    body?: string;
}

export default function Heading({ title, subtitle, body }: HeadingProps) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{body}</p>
        </div>
    )
}