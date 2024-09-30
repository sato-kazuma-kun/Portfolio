'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Error() {
    return (
        <section className='w-full h-[calc(100vh_-_64px)] absolute bottom-0 left-0 flex items-center justify-center mt-[calc(50vh_-_32px)]'>
            <Card className="w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%]">
                <CardHeader>
                    <CardTitle className='text-destructive'>Error</CardTitle>
                    <CardDescription>Something went wrong but it&apos;s not your fault!</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-center font-semibold'>There has been an unexpected error.</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={() => document.location.reload()} aria-label='Reload page'>Reload</Button>
                </CardFooter>
            </Card>
        </section>
    );
}
