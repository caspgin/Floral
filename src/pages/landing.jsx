import { Hero } from '../components/hero';
import { Occasion } from '../components/occasion';
import { Ordering } from '../components/ordering';
import { SpecialOccasion } from '../components/special_occasion';

export function Landing() {
    return (
        <>
            <main>
                <Hero />
                <Occasion />
                <SpecialOccasion />
                <Ordering />
            </main>
        </>
    );
}
