import Title from "@/components/ui/title";


export default function SectionTitle({ info, title, style, classNames }: { info: string, title: string; style?: string, classNames?: { info?: string, title?: string; }; }) {
    return (
        <div className={`w-full ${style}`}>
            <Title varient='info' fullWidth={true} className={`text-center ${classNames?.info}`}>{info}</Title>
            <Title varient='title' fullWidth={true} color='violet' className={`text-center ${classNames?.title} !leading-[4rem]`}>{title}</Title>
        </div>
    );
}
