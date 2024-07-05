export const EmailTemplate = ({
    name,
    email,
    message
}) => (
    <div className="bg-background text-foreground">
        <p className="text-sm">This email is from `www.rahul.eu.org`</p>
        <div className="p-6 rounded-md border border-border">
            <h1 className="text-2xl font-medium">{name}</h1>
            <span className="text-sm mt-2">{email}</span>
            <p className="mt-3 text-sm">{message}</p>
        </div>
    </div>
);
