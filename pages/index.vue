<script setup lang="ts">
useSeoMeta({
    viewport: 'width=device-width, initial-scale=1.0',

    title: 'บริษัท สยามน้ำริน จำกัด',
    description: 'สินค้า คอนกรีต สำเร็จรูป รวมถึงงานออกแบบ และงานก่อสร้าง บริษัทสยามน้ำรินจำกัด มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน หรือโรงงาน โปรดรับ บริษัทสยามน้ำรินจำกัด เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ พร้อมให้คำแนะนำ เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน',
    keywords: 'Precast Concrete',

    ogType: 'website',
    ogTitle: 'บริษัท สยามน้ำริน จำกัด',
    ogDescription: 'สินค้า คอนกรีต สำเร็จรูป รวมถึงงานออกแบบ และงานก่อสร้าง บริษัทสยามน้ำรินจำกัด มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน หรือโรงงาน โปรดรับ บริษัทสยามน้ำรินจำกัด เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ พร้อมให้คำแนะนำ เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน',
    ogImage: '/images/products_service/1/5.jpg',
    ogUrl: 'https://www.siamnamrin.com/',
    ogSiteName: 'siamnamrin.com',
    ogLocale: 'th_TH',

    // twitterCard: 'summary_large_image',
    // twitterSite: 'siamnamrin.com',
    // twitterTitle: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
    // twitterDescription: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
})

const carouselLinks = [
    {
        src: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194096.jpg&fm=jpg&_gl=1*6m6e8s*_ga*MTY1MDI0NTU2My4xNzEyODExNTcy*_ga_8JE65Q40S6*MTcxMjgxMTU3MS4xLjEuMTcxMjgxMTU3NS4wLjAuMA..",
        alt: "",
    },
    {
        src: "https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg",
        alt: "",
    },
    {
        src: "https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "",
    },
    {
        src: "https://images.pexels.com/photos/2431402/pexels-photo-2431402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "",
    }
]

</script>

<template>
    <div class="mx-auto">
        <!-- Slider -->
        <Carousel :links="carouselLinks" />

        <!-- End Slider -->
        <div class="w-auto h-auto p-8">
            <section>
                <h1 class="text-4xl font-extrabold text-secondary">
                    บริษัท สยามน้ำริน จำกัด
                </h1>
                <p id="P1" class="text-xl whitespace-pre-line">
                    จำหน่าย และให้บริการ สินค้า <strong>คอนกรีต</strong> สำเร็จรูป
                    รวมถึงงานออกแบบ และงานก่อสร้าง
                    บริษัทสยามน้ำรินจำกัด
                    มีเจ้าหน้าที่เป็นผู้เชี่ยวชาญด้านการออกแบบและวางระบบต่าง ๆ โดยเฉพาะ โรงเลี้ยงสัตว์ ฟาร์มสัตว์ บ้าน
                    หรือโรงงาน โปรดรับ บริษัทสยามน้ำรินจำกัด เป็นอีกหนึ่งทางเลือก ทางบริษัทฯ ยินดีรับฟัง และ
                    พร้อมให้คำแนะนำ
                    เพื่อประโยชน์สูงสุดของลูกค้า เน้น คุณภาพ และ รับประกันราคา จากโรงงานแน่นอน</p>
            </section>
            <br>
            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    สนใจติดต่อสอบถามรายละเอียดได้ที่
                </h2>
                <p class="text-lg">
                    คุณเอ โทร. <strong class="text-neutral">088-909-3896</strong> ID LINE: <strong
                        class="text-neutral">teeruka</strong>
                </p>
            </section>
            <br>
            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    รางน้ำคอนกรีตสำเร็จรูป
                </h2>
                <p class="text-lg">
                    รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของ SNR มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย
                    รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
                </p>
            </section>
            <img src="/images/home/banner1.jpg" alt="รางน้ำคอนกรีตสำเร็จรูป"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    ผนังสำเร็จรูป ระบบ Knockdown
                </h2>
                <p class="text-lg">
                    ระบบ Knockdown ผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก ด้วยการออกแบบในระบบ
                    Knockdown ทำ
                    ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา ใช้แรงงานในการก่อสร้างน้อย ไม่สิ้นเปลืองวัสดุอื่น
                    (เช่น
                    ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว ประหยัดงบประมาณในการก่อสร้าง
                </p>
            </section>
            <img src="/images/home/banner2.png" alt="ผนังสำเร็จรูป ระบบ Knockdown"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    แสลทปูพื้นคอนกรีตสำเร็จรูป
                </h2>
                <p class="text-lg">
                    แสลทปูพื้นสำเร็จรูป SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                    โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                    และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด ยังมีแสลทปูพื้น มีให้เลือก หลายแบบ
                    หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
                </p>
            </section>
            <img src="/images/home/banner3.png" alt="แสลทปูพื้นคอนกรีตสำเร็จรูป"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    ระบบ เสา คาน ตอม่อ สำเร็จรูป
                </h2>
                <p class="text-lg">
                    ตอม่อ สำเร็จรูป ระบบ Knockdownผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก
                    ด้วยการออกแบบในระบบ Knockdown ทำ ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา
                    ใช้แรงงานในการก่อสร้างน้อย ไม่สิ้นเปลืองวัสดุอื่น (เช่น ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว
                    ประหยัดงบประมาณในการก่อสร้าง
                </p>
            </section>
            <img src="/images/home/banner4.png" alt="ระบบ เสา คาน ตอม่อ สำเร็จรูป"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    สแลทพ่อพันธุ์
                </h2>
                <p class="text-lg">
                    แสลทปูพื้นสำเร็จรูป ของ SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                    โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                    และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ
                    หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    สแลทคอกคลอด
                </h2>
                <p class="text-lg">
                    แสลทปูพื้นสำเร็จรูป ของ บริษัทสยามน้ำรินจำกัด ผลิตจากคอนกรีตเสริม เหล็กซึ่งมีความคงทนแข็งแกร่ง
                    โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                    และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ
                    หลายขนาด เข้ากับการใช้งานได้อย่างมีคุณภาพ
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    ผนังคอกหมูขุน
                </h2>
                <p class="text-lg">
                    ระบบ Knockdown ผลิตจากคอนกรีตเสริมเหล็ก เทคโนโลยีเดียวกับประเทศเดนมาร์ก ด้วยการออกแบบในระบบ
                    Knockdown ทำ ให้สามารถนำผลิตภัณฑ์ไปประกอบได้ง่าย ประหยัดเวลา ใช้แรงงานในการก่อสร้างน้อย
                    ไม่สิ้นเปลืองวัสดุอื่น (เช่น ไม้แบบ และอื่นๆ) สะดวก รวดเร็ว ประหยัดงบประมาณในการก่อสร้าง
                </p>
            </section>
            <img src="/images/home/banner5.png" alt="สแลทพ่อพันธุ์ สแลทคอกคลอด ผนังคอกหมูขุน"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>

            <section>
                <h2 class="text-2xl font-semibold text-secondary">
                    รั้วและกำแพงคอนกรีตสำเร็จรูป
                </h2>
                <p class="text-lg">
                    ระบบรั้วและกำแพงกันดิน สำเร็จรูป ขนาดได้มาตรฐาน ตามหลักวิศวกรรม รั้วและกำแพงกันดินของ SNR
                    มีความแข็งแรงเพราะผลิตด้วยกรรมวิธีคอนกรีตอัดแรง ลูกค้าสามารถเชื่อมั่นและวางใจในผลิตภัณฑ์ทั้งคุณภาพ
                    และ ราคาจากโรงงาน
                </p>
            </section>
            <img src="/images/home/banner6.jpg" alt="รั้วและกำแพงคอนกรีตสำเร็จรูป"
                class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
            <br>
        </div>

        <!-- Scroll to Top -->
        <ScrollToTopButton />
    </div>
</template>