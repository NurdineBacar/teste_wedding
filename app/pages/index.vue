<script setup>
useHead({
    title: "Imelda&Marcel"
})


import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNow } from '@vueuse/core'

// Data alvo da contagem regressiva
const targetDate = ref(new Date('2025-12-13T00:00:00'))

// useNow atualiza automaticamente a cada segundo
const now = useNow()

// Calcula o tempo restante
const timeLeft = computed(() => {
    const difference = targetDate.value.getTime() - now.value.getTime()

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false
    }
})

// Função para formatar o input datetime-local
const formattedDate = computed({
    get: () => {
        const date = new Date(targetDate.value)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        return `${year}-${month}-${day}T${hours}:${minutes}`
    },
    set: (value) => {
        targetDate.value = new Date(value)
    }
})

// Registrar plugins
gsap.registerPlugin(SplitText, ScrollTrigger)

const locationIcon = ref('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>')

const images = ref([])
const couple_name = ref();




onMounted(() => {
    // Configuração global do GSAP
    gsap.config({
        nullTargetWarn: false
    })

    // Animação do Header com sequência mais suave
    const headerAnimation = () => {
        // Timeline principal do header
        const headerTL = gsap.timeline()

        // Flores primeiro - entrada suave
        headerTL.from('.flower1', {
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })
            .from('.flower2', {
                y: 200,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.5")

        // Imagens do casal - entrada escalonada
        headerTL.from('.marime', {
            x: -100,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            stagger: 0.3,
            ease: "back.out(1.7)"
        }, "-=0.8")

        // Texto de bênção
        const blessing = document.querySelector('.bless')
        if (blessing) {
            const splitBlessing = new SplitText(blessing, { type: 'chars' })
            headerTL.from(splitBlessing.chars, {
                y: 50,
                opacity: 0,
                stagger: 0.02,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
        }

        // Nomes dos pais
        headerTL.from('.parents-name', {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        })

        // Nome do casal - destaque principal
        if (couple_name.value) {
            const splitCouple = new SplitText(couple_name.value, { type: 'chars' })
            headerTL.from(splitCouple.chars, {
                y: 100,
                opacity: 0,
                rotationX: -90,
                stagger: 0.03,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.3")
        }

        // Versículo e citação
        const verse = document.querySelector('.verse')
        const verseCite = document.querySelector('.verse-cite')

        if (verse) {
            headerTL.from(verse, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            })
        }

        if (verseCite) {
            const splitVerseCite = new SplitText(verseCite, { type: 'chars' })
            headerTL.from(splitVerseCite.chars, {
                opacity: 0,
                stagger: 0.01,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.5")
        }

        // Data do casamento
        const dateWedding = document.querySelector('.date-wedding')
        if (dateWedding) {
            headerTL.from(dateWedding, {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.75)"
            })
        }

        // Localizações das cerimônias
        headerTL.from('.ceremony-location', {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")

        // Confirmação de presença
        headerTL.from('.presence', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
            .from('.warn', {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.3")
    }

    // Animação da seção de contagem regressiva
    const countdownAnimation = () => {
        gsap.from('.countdown-section', {
            scrollTrigger: {
                trigger: '.countdown-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })

        gsap.from('.countdown-item', {
            scrollTrigger: {
                trigger: '.countdown-section',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
    }

    // Animação da seção "Nossa História"
    const storyAnimation = () => {
        // Timeline para a seção de história
        const storyTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        storyTL.from('.story-image', {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })
            .from('.story-title', {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
            .from('.story-text', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5")
            .from('.story-flower', {
                scale: 0,
                rotation: 180,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "back.out(1.7)"
            }, "-=0.8")
    }

    // Animação do footer
    const footerAnimation = () => {
        gsap.from('.footer-flower', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
        })

        gsap.from('.footer-gallery img', {
            scrollTrigger: {
                trigger: '.footer-gallery',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "back.out(1.7)"
        })

        gsap.from('.footer-overlay h2', {
            scrollTrigger: {
                trigger: '.footer-overlay',
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        })
    }

    // Animação de elementos flutuantes
    const floatingAnimations = () => {
        // Animação suave para as flores
        gsap.to('.flower1, .flower2', {
            y: 20,
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

        // Animação sutil para os botões
        gsap.to('button', {
            y: -5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        })
    }

    // Inicializar todas as animações
    const initAnimations = () => {
        headerAnimation()
        countdownAnimation()
        storyAnimation()
        footerAnimation()
        floatingAnimations()
    }

    // Pequeno delay para garantir que o DOM está carregado
    setTimeout(initAnimations, 100)
})
</script>

<template>
    <main class="pb-32 overflow-x-hidden">
        <header class="flex flex-col md:flex-row w-screen md:h-screen md:relative">
            <section>
                <img src="/images/flower.png" alt=""
                    class="hidden md:block w-[480px] absolute -left-20 -top-16 rotate-16 flower1">
                <div class="">
                    <div class="hidden w-[295px] md:absolute left-[490px] md:flex items-center justify-center marime">
                        <img src="/images/marime5.jpeg" alt=""
                            class="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    </div>
                    <div
                        class="hidden w-full md:w-[295px] md:absolute left-[260px] top-[30%] z-50 md:flex items-center justify-center marime">
                        <img src="/images/marime7.jpeg" alt=""
                            class="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    </div>
                    <div
                        class="w-full md:w-[295px] md:absolute left-[260px] top-[30%] z-50 md:hidden items-center justify-center marime">
                        <img src="/images/marime10.png" alt=""
                            class="transform hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="w-[295px] md:absolute bottom-0 hidden md:flex items-center justify-center marime">
                        <img src="/images/marime4.jpeg" alt=""
                            class="w-[295px] rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    </div>
                    <img src="/images/flower-2.png" alt=""
                        class="hidden md:block w-[560px] md:absolute -bottom-6 left-[27.5%] rotate-y-12 flower2">
                </div>
            </section>
            <section class="md:w-[45%] md:h-screen md:absolute right-0 flex flex-col items-center gap-3 pt-14">
                <div class="mb-5 *:text-amber-900">
                    <div class="mb-7">
                        <h3 class="text-center mb-1 font-semibold bless">COM A BENÇÃO DE DEUS E SEUS PAIS</h3>
                        <div class="flex justify-between items-center gap-3 md:gap-0 *:text-center ">
                            <h3 class="italic text-sm md:text-base parents-name">Elias Mondlane & Quiteria Mondlane</h3>
                            <h3 class="italic text-sm md:text-base parents-name">Bernado Nota & Faustina Nota</h3>
                        </div>
                    </div>
                    <h2 class="text-5xl md:text-8xl text-center md:text-left" ref="couple_name">Imelda & Marcel</h2>
                </div>

                <div class="px-4 md:pl-12 mb-7 md:pr-5 md:w-2/3 flex flex-col items-center justify-center">
                    <p class="text-center verse">"O amor é sofredor, é benigno, o amor não é invejoso, o amor não
                        trata com leviandade, não se ensoberbece; <br><br>
                        Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor."
                    </p>
                    <cite class="text-center mt-2 font-semibold verse-cite">I Coríntios cap.13 4;13</cite>
                    <p class="font-semibold text-center text-2xl mt-7 date-wedding">13 de Dezembro de 2025</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 md:pl-20 md:pr-6 items-start gap-y-8">
                    <article class="flex flex-col items-center justify-center gap-1 ceremony-location">
                        <div class="-ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                    d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl md:text-3xl text-amber-900">Cerimonia Religiosa</h2>
                        <p class="text-sm font-medium">11:30 Horas</p>
                        <p class="text-center text-xs font-medium w-3/4 text-gray-500">Estrada Eduardo Mondlane, paragem
                            pandora</p>
                        <a href="https://maps.app.goo.gl/UcD1yguZbc2UNwUU9"
                            class="mt-4 md:mt-6 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-300 ease-in-out hover:*:text-white hover:cursor-pointer transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </a>
                    </article>
                    <article class="flex flex-col items-center justify-center gap-1 ceremony-location">
                        <div class="-ml-2">
                            <img src="/images/icon/casamento.png" alt="" width="50px">
                        </div>
                        <h2 class="text-2xl md:text-3xl text-amber-900">Cerimonia Civil</h2>
                        <p class="text-sm font-medium">16:00 Horas</p>
                        <p class="text-center text-xs font-medium text-gray-500">Folha Verde Events Venue, Rua de
                            Empasse Parcela 856, Matola</p>
                        <a href="https://maps.app.goo.gl/Qvr4hn6j3BRfLeqe8"
                            class="mt-4 md:mt-10 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-300 ease-in-out hover:*:text-white hover:cursor-pointer transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </a>
                    </article>
                    <article
                        class="flex flex-col items-center justify-center gap-1 col-span-2 md:col-span-1 ceremony-location">
                        <div class="-ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 50 50">
                                <path fill="currentColor"
                                    d="M49.577 56.055c-.766-1.398-2.086-4.143-3.186-8.133c-1.391-5.041-1.356-5.947-.781-9.232c2.177-12.469.877-19.009-1.983-26.538c-1.542-4.049-1.954-3.854-1.954-3.854s-2.836-.569-6.832.475c-2.983.775-4.945 2.014-5.747 2.592c.649-3.85.226-3.889.226-3.889s-2.164-1.871-6.158-2.913c-3.998-1.042-6.835-.473-6.835-.473s-.411-.195-1.952 3.854c-2.861 7.53-4.16 14.068-1.982 26.536c.574 3.284.607 4.191-.781 9.232c-1.1 3.99-2.421 6.734-3.187 8.133c-3.358-.601-6.075-.273-6.394.881c-.37 1.352 2.667 3.313 6.79 4.386c4.117 1.073 7.761.851 8.132-.497c.326-1.188-1.985-2.852-5.354-3.966c.059-1.589.328-4.597 1.422-8.565c1.389-5.043 1.887-5.814 4.071-8.375c7.591-8.905 10.107-14.933 11.55-21.945c.066.568.17 1.283.332 2.206c1.395 7.908 3.631 14.203 11.934 23.942c2.186 2.566 2.684 3.338 4.072 8.379c1.094 3.973 1.364 6.98 1.423 8.568c-3.368 1.113-5.681 2.775-5.354 3.963c.371 1.35 4.014 1.57 8.135.499c4.12-1.073 7.16-3.037 6.786-4.389c-.319-1.153-3.032-1.479-6.393-.877m-34.283.127c-1.256 1.46-5.593.288-6.251.117c-.618-.162-5.017-1.264-5.354-3.139c0 0 .46.99 5.578 2.324c5.119 1.331 6.027.698 6.027.698m-5.141-4.192c-.299 1.271-.417 1.787-1.005 1.637c-.51-.135-.59-.624-.408-.947c2.143-3.793 4.118-10.222 4.118-10.222s-2.189 7.328-2.705 9.532M24.432 8.647c-.235 1.764-.636 3.627-1.142 5.515a17 17 0 0 0 1.856-1.358c-1.913 8.773-8.386 20.09-4.499 13.915c3.849-6.115 5.574-12.909 5.943-15.142c.824-.683 1.271-.911 1.148.08c-1.244 7.003-3.213 12.559-9.229 20.302c-1.9 2.446-5.021 1.766-5.46-1.729c-.588-4.7-.59-8.477-.136-11.899a4 4 0 0 1 .912-1.426c.969-5.447 3.021-9.936 3.485-10.902c-.436-.335-.734-.673-.796-.989c0 0 1.537 1.274 5.994 2.433c4.455 1.163 6.443.807 6.443.807c-.577.651-2.7.619-4.519.393m20.52 25.761c-.438 3.5-3.998 3.716-5.967 1.104c-5.6-7.425-7.516-12.844-8.725-19.647c-.123-.992.324-.765 1.148-.082c.369 2.229 2.095 9.025 5.943 15.143c3.888 6.178-2.588-5.144-4.5-13.917c.554.456 1.173.933 1.839 1.346c-.499-1.899-.891-3.758-1.123-5.5c-1.82.225-3.942.257-4.522-.396c0 0 1.988.355 6.445-.805c4.455-1.163 5.992-2.435 5.992-2.435c-.242 1.24-4.094 2.811-5.77 3.249l-.059.014c.125.935.479 3.395 1.192 6.837c.412.108.83.184 1.255.184c1.419 0 3.072.052 4.45.582c-.409-2.207-.941-4.403-1.644-6.279c-.828-2.221.441-2.123 1.088-.584c.38.899 1.265 3.79 1.838 7.583c.533.425.969.986 1.25 1.733c.454 3.417.454 7.183-.13 11.87m.19 12.256s1.975 6.43 4.121 10.223c.18.32.1.813-.41.943c-.588.157-.705-.361-1.005-1.633c-.517-2.202-2.706-9.533-2.706-9.533m3.819 13.841c-.661.172-4.997 1.344-6.255-.117c0 0 .908.638 6.027-.695c5.118-1.335 5.577-2.325 5.577-2.325c-.337 1.874-4.735 2.978-5.349 3.137" />
                                <path fill="currentColor"
                                    d="M18.992 7c-.491.862-1.632 3.279-2.863 8.662c1.221-.325 2.577-.363 3.771-.363c.404 0 .803-.07 1.195-.169c.752-3.469 1.12-5.922 1.248-6.854l-.055-.014c-.809-.211-2.124-.687-3.296-1.262M62 14.329l-3.03-5.547l-11.317 8.776zm-4.355 12.832l2.55-4.753l-10.934-1.927zM48.382 2l-2.381 10.935l7.479-8.412z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl md:text-3xl text-amber-900">Copo de Agua</h2>
                        <p class="text-sm font-medium">17:00 Horas</p>
                        <p class="text-center text-xs font-medium w-3/4 text-gray-500">Estrada Eduardo Mondlane, paragem
                            pandora</p>
                        <a href="https://maps.app.goo.gl/Qvr4hn6j3BRfLeqe8"
                            class="mt-4 md:mt-2 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-300 ease-in-out hover:*:text-white hover:cursor-pointer transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </a>
                    </article>
                </div>

                <div class="mt-3 flex flex-col items-center justify-center presence">
                    <h3 class="font-semibold">Confirme sua presenca</h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSenev6POFrvifWUfMJ3CQtO1BEdySzdxUuzGGGCbZglpDtjug/viewform?usp=publish-editor"
                        class="mt-3 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-300 ease-in-out hover:*:text-white hover:cursor-pointer transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4m1 4l2 2l4-4" />
                        </svg>
                        <span>Clique aqui</span>
                    </a>
                    <cite class="mt-3 font-bold italic text-sm text-red-500 underline warn">Convite não extensivo a
                        crianças!</cite>
                </div>
            </section>
        </header>

        <!-- Seção de Contagem Regressiva -->
        <section
            class="mt-24 md:mt-36 static md:w-screen flex flex-col items-center justify-center countdown-section px-4">
            <h3 class="text-3xl md:text-5xl mb-9 md:mb-12 text-amber-900 text-center">Faltam:</h3>
            <div class="text-xl md:*:text-6xl flex items-center gap-2 md:gap-8 lg:gap-10 flex-wrap justify-center"
                v-if="!timeLeft.expired">
                <div
                    class="flex flex-col gap-1 items-center justify-center countdown-item min-w-[60px] md:min-w-[100px]">
                    <span class="countdown-number text-3xl md:text-6xl">{{ timeLeft.days }}</span>
                    <span class="countdown-label text-sm md:text-base">Dias</span>
                </div>
                <span class="countdown-separator text-2xl md:text-4xl">:</span>
                <div
                    class="flex flex-col gap-1 items-center justify-center countdown-item min-w-[60px] md:min-w-[100px]">
                    <span class="countdown-number text-3xl md:text-6xl">{{ timeLeft.hours }}</span>
                    <span class="countdown-label text-sm md:text-base">Horas</span>
                </div>
                <span class="countdown-separator text-2xl md:text-4xl">:</span>
                <div
                    class="flex flex-col gap-1 items-center justify-center countdown-item min-w-[60px] md:min-w-[100px]">
                    <span class="countdown-number text-3xl md:text-6xl">{{ timeLeft.minutes || "sem" }}</span>
                    <span class="countdown-label text-sm md:text-base">Minutos</span>
                </div>
                <span class="countdown-separator text-2xl md:text-4xl">:</span>
                <div
                    class="flex flex-col gap-1 items-center justify-center countdown-item min-w-[60px] md:min-w-[100px]">
                    <span class="countdown-number text-3xl md:text-6xl">{{ timeLeft.seconds || "sem" }}</span>
                    <span class="countdown-label text-sm md:text-base">Segundos</span>
                </div>
            </div>
            <h3 class="countdown-number text-lg md:text-3xl" v-else>Hoje é o grande dia!!!!!!!!</h3>
        </section>

        <!-- Seção Nossa História - Layout Corrigido -->
        <section
            class="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 md:py-20 px-4 md:px-8 lg:px-20 gap-8 lg:gap-16 story-section">
            <!-- Imagem -->
            <div class="w-full lg:w-2/5 flex">
                <img src="/images/marime3.jpg" alt="Nossa História"
                    class="w-full  md:max-h-[70vh] object-cover rounded-2xl shadow-2xl story-image">
            </div>

            <!-- Texto -->
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 class="text-5xl md:text-7xl lg:text-8xl text-amber-900 mb-6 lg:mb-8 story-title">Nossa Historia</h2>
                <div class="max-w-2xl">
                    <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed story-text">
                        A nossa história começou em 2017 com uma apresentação especial de uma amiga
                        que, sem saber, estava a escrever o primeiro parágrafo do nosso grande amor.
                        O nosso primeiro encontro foi num palco de música e magia, um festival de zouk,
                        onde a vida decidiu que a nossa melodia seria feita para ser dançada a dois.
                        <br><br>
                        Encontrámos no abraço um do outro o nosso lugar favorito no mundo. E agora,
                        convidamos-vos a celebrar connosco o próximo movimento desta dança eterna:
                        O nosso casamento.
                    </p>
                </div>
            </div>

        </section>

        <!-- Footer Corrigido -->
        <footer class="w-full relative mt-16 md:mt-32 flex justify-center px-4 md:px-8">
            <img src="/images/flower-3.png" alt=""
                class="md:block w-24 lg:w-auto lg:h-[400px] absolute -left-4 lg:left-10 md:top-10 bottom-0 md:bottom-auto z-50 footer-flower">

            <div class="w-full max-w-6xl relative rounded md:rounded-none overflow-hidden">
                <div class="flex  justify-center items-center">
                    <img src="/images/marime6.jpeg" alt=""
                        class="hidden md:block w-full md:w-1/3 h-[300px] md:h-[400px] object-cover rounded-l-2xl shadow-2xl">
                    <img src="/images/marime7.jpeg" alt="" class="w-full md:w-1/3 md:h-[400px] object-cover shadow-2xl">
                    <img src="/images/marime5.jpeg" alt=""
                        class="hidden md:block w-full md:w-1/3 h-[300px] md:h-[400px] object-cover rounded-r-2xl shadow-2xl">
                </div>
                <div
                    class="absolute inset-0 w-full h-full bg-black/40 flex items-center justify-center rounded-2xl footer-overlay">
                    <h2 class="text-white text-6xl md:text-6xl lg:text-7xl text-center px-4">Esperamos por ti!</h2>
                </div>
            </div>

            <img src="/images/flower-4.png" alt=""
                class=" md:block w-24 lg:w-auto lg:h-[400px] absolute -right-4 lg:right-10 md:top-10 bottom-0 md:bottom-auto z-50 footer-flower">
        </footer>
    </main>
</template>

<style scoped>
h2 {
    font-family: 'Fleur De Leah', sans-serif;
}

/* Melhorias de performance para animações */
.char,
.bless-char {
    display: inline-block;
    position: relative;
    transform-style: preserve-3d;
}

/* Estilos para contagem regressiva */
.countdown-number {
    font-weight: bold;
    background: linear-gradient(45deg, #92400e, #d97706);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.countdown-label {
    font-size: 0.8rem;
    color: #92400e;
    font-weight: 600;
}

.countdown-separator {
    color: #92400e;
    font-weight: bold;
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

/* Melhorias de hover */
button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.flower1,
.flower2 {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Garantir que as animações sejam suaves */
* {
    backface-visibility: hidden;
}

/* Responsividade melhorada */
</style>