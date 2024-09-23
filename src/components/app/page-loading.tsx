import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function PageLoading() {
    return (
        <section className='w-full h-[calc(100vh_-_64px)] absolute bottom-0 left-0 flex items-center justify-center mt-[calc(50vh_-_32px)]'>
            <LoadingSpinner size={36} />
        </section>
    );
}
