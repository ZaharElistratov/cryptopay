import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules'

import Container from "@/components/ui/Container/Container";

import 'swiper/css';
import styles from './UseCases.module.css';
import cn from "classnames";
import {useRouter} from "next/router";
import useCasesTranslation from "@/data/usecases.json";
import Item from "@/components/screens/Home/UseCases/Item/Item";

const UseCases = () => {
    const { locale } = useRouter()

    const useCases = useCasesTranslation.filter(item => item.locale === locale)

    console.log(useCases[0])

    return (
        <section className={styles.useCases}>
            <Container className={styles.container}>
                <Swiper
                    className={styles.slider}
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{
                        el: '.sliderPagination',
                        clickable: true,
                        bulletClass: styles.bullet,
                        bulletActiveClass: styles.active
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true
                    }}
                    direction='vertical'
                >
                    {useCases[0].slides?.map((item, index) => (
                        <SwiperSlide className={styles.slide} key={index}>
                            <Item title={item.title} text={item.text} button={item.button.text} img={item.img}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cn(styles.pagination, 'sliderPagination')}></div>
            </Container>
        </section>
    );
};

export default UseCases;