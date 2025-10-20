<script>

const locationIcon = ref('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>')
</script>

<template>
    <main class="pb-10">
        <header class="flex flex-col md:flex-row w-screen md:h-screen md:relative">
            <section>
                <img src="/images/flower.png" alt=""
                    class="hidden md:block w-[480px] absolute -left-20 -top-16 rotate-16">
                <div class="">
                    <div class="hidden w-[295px] md:absolute left-[490px] md:flex items-center justify-center">
                        <img src="/images/marime5.jpeg" alt="" class="">
                    </div>
                    <div
                        class="w-full md:w-[295px] md:absolute left-[260px] top-[30%] z-50 flex items-center justify-center">
                        <img src="/images/marime7.jpeg" alt="" class="">
                    </div>
                    <div class="w-[295px] md:absolute bottom-0 hidden md:flex items-center justify-center">
                        <img src="/images/marime4.jpeg" alt="" class="w-[295px]">
                    </div>
                    <img src="/images/flower-2.png" alt=""
                        class="hidden md:block w-[560px] md:absolute -bottom-6 left-[27.5%] rotate-y-12">
                </div>
            </section>
            <section class="md:w-[45%] md:h-screen md:absolute right-0 flex flex-col items-center gap-3 pt-14">
                <div class="mb-5 *:text-amber-900">
                    <div class="mb-7">
                        <h3 class="text-center mb-1 font-semibold">COM A BENÇÃO DE DEUS E SEUS PAIS </h3>
                        <div class="flex justify-between items-center gap-3 md:gap-0 *:text-center ">
                            <h3 class="italic text-sm md:text-base">Elias Mondlane & Quiteria Mondlane</h3>
                            <h3 class="italic text-sm md:text-base">Bernado Nota & Faustina Nota</h3>
                        </div>
                    </div>
                    <h2 class="text-7xl md:text-8xl text-center md:text-left">Imelda & Marcel</h2>
                </div>

                <div class="px-4 md:pl-12 mb-7 md:pr-5 md:w-2/3 flex flex-col items-center justify-center">
                    <p class="text-center">"O amor é sofredor, é benigno, o amor não é invejoso, o amor não trata com
                        leviandade, não se
                        ensoberbece; <br>
                        </br>
                        Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.
                        "</p>
                    <cite class="text-center mt-2 font-semibold">I Coríntios cap.13 4;13</cite>
                    <p class="font-semibold text-center text-2xl mt-7">13 de Dezembro de 2025</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 md:pl-20 md:pr-6 items-start gap-y-8">
                    <article class="flex flex-col items-center justify-center gap-1">
                        <div class="-ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                    d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z" />
                            </svg>
                        </div>
                        <h2 class="text-3xl text-amber-900">Cerimonia Religiosa</h2>
                        <p class="text-sm font-medium">11:30 Horas</p>
                        <p class="text-center text-xs font-medium w-3/4 text-gray-500">Estrada Eduardo Mondlane, paragem
                            pandora. <br> Estrada Eduardo Mondlane, paragem
                            pandora</p>
                        <button
                            class="mt-2 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-150 ease-in-out hover:*:text-white hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </button>
                    </article>
                    <article class="flex flex-col items-center justify-center gap-1">
                        <div class="-ml-2">
                            <img src="/images/icon/casamento.png" alt="" width="50px">
                        </div>
                        <h2 class="text-3xl text-amber-900">Cerimonia Civil </h2>
                        <p class="text-sm font-medium">16:00 Horas</p>
                        <p class="text-center text-xs font-medium  text-gray-500">Folha Verde Events Venue ,Rua de
                            Empasse
                            Parcela 856, Matola. <br> Estrada N4, paragem
                            Aviario </p>
                        <button
                            class="mt-7 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-150 ease-in-out hover:*:text-white hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </button>
                    </article>
                    <article class="flex flex-col items-center justify-center gap-1 col-span-2 md:col-span-1">
                        <div class="-ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
                                <path fill="currentColor"
                                    d="M49.577 56.055c-.766-1.398-2.086-4.143-3.186-8.133c-1.391-5.041-1.356-5.947-.781-9.232c2.177-12.469.877-19.009-1.983-26.538c-1.542-4.049-1.954-3.854-1.954-3.854s-2.836-.569-6.832.475c-2.983.775-4.945 2.014-5.747 2.592c.649-3.85.226-3.889.226-3.889s-2.164-1.871-6.158-2.913c-3.998-1.042-6.835-.473-6.835-.473s-.411-.195-1.952 3.854c-2.861 7.53-4.16 14.068-1.982 26.536c.574 3.284.607 4.191-.781 9.232c-1.1 3.99-2.421 6.734-3.187 8.133c-3.358-.601-6.075-.273-6.394.881c-.37 1.352 2.667 3.313 6.79 4.386c4.117 1.073 7.761.851 8.132-.497c.326-1.188-1.985-2.852-5.354-3.966c.059-1.589.328-4.597 1.422-8.565c1.389-5.043 1.887-5.814 4.071-8.375c7.591-8.905 10.107-14.933 11.55-21.945c.066.568.17 1.283.332 2.206c1.395 7.908 3.631 14.203 11.934 23.942c2.186 2.566 2.684 3.338 4.072 8.379c1.094 3.973 1.364 6.98 1.423 8.568c-3.368 1.113-5.681 2.775-5.354 3.963c.371 1.35 4.014 1.57 8.135.499c4.12-1.073 7.16-3.037 6.786-4.389c-.319-1.153-3.032-1.479-6.393-.877m-34.283.127c-1.256 1.46-5.593.288-6.251.117c-.618-.162-5.017-1.264-5.354-3.139c0 0 .46.99 5.578 2.324c5.119 1.331 6.027.698 6.027.698m-5.141-4.192c-.299 1.271-.417 1.787-1.005 1.637c-.51-.135-.59-.624-.408-.947c2.143-3.793 4.118-10.222 4.118-10.222s-2.189 7.328-2.705 9.532M24.432 8.647c-.235 1.764-.636 3.627-1.142 5.515a17 17 0 0 0 1.856-1.358c-1.913 8.773-8.386 20.09-4.499 13.915c3.849-6.115 5.574-12.909 5.943-15.142c.824-.683 1.271-.911 1.148.08c-1.244 7.003-3.213 12.559-9.229 20.302c-1.9 2.446-5.021 1.766-5.46-1.729c-.588-4.7-.59-8.477-.136-11.899a4 4 0 0 1 .912-1.426c.969-5.447 3.021-9.936 3.485-10.902c-.436-.335-.734-.673-.796-.989c0 0 1.537 1.274 5.994 2.433c4.455 1.163 6.443.807 6.443.807c-.577.651-2.7.619-4.519.393m20.52 25.761c-.438 3.5-3.998 3.716-5.967 1.104c-5.6-7.425-7.516-12.844-8.725-19.647c-.123-.992.324-.765 1.148-.082c.369 2.229 2.095 9.025 5.943 15.143c3.888 6.178-2.588-5.144-4.5-13.917c.554.456 1.173.933 1.839 1.346c-.499-1.899-.891-3.758-1.123-5.5c-1.82.225-3.942.257-4.522-.396c0 0 1.988.355 6.445-.805c4.455-1.163 5.992-2.435 5.992-2.435c-.242 1.24-4.094 2.811-5.77 3.249l-.059.014c.125.935.479 3.395 1.192 6.837c.412.108.83.184 1.255.184c1.419 0 3.072.052 4.45.582c-.409-2.207-.941-4.403-1.644-6.279c-.828-2.221.441-2.123 1.088-.584c.38.899 1.265 3.79 1.838 7.583c.533.425.969.986 1.25 1.733c.454 3.417.454 7.183-.13 11.87m.19 12.256s1.975 6.43 4.121 10.223c.18.32.1.813-.41.943c-.588.157-.705-.361-1.005-1.633c-.517-2.202-2.706-9.533-2.706-9.533m3.819 13.841c-.661.172-4.997 1.344-6.255-.117c0 0 .908.638 6.027-.695c5.118-1.335 5.577-2.325 5.577-2.325c-.337 1.874-4.735 2.978-5.349 3.137" />
                                <path fill="currentColor"
                                    d="M18.992 7c-.491.862-1.632 3.279-2.863 8.662c1.221-.325 2.577-.363 3.771-.363c.404 0 .803-.07 1.195-.169c.752-3.469 1.12-5.922 1.248-6.854l-.055-.014c-.809-.211-2.124-.687-3.296-1.262M62 14.329l-3.03-5.547l-11.317 8.776zm-4.355 12.832l2.55-4.753l-10.934-1.927zM48.382 2l-2.381 10.935l7.479-8.412z" />
                            </svg>
                        </div>
                        <h2 class="text-3xl text-amber-900">Copo de Agua</h2>
                        <p class="text-sm font-medium">17:00 Horas</p>
                        <p class="text-center text-xs font-medium w-3/4 text-gray-500">Estrada Eduardo Mondlane, paragem
                            pandora</p>
                        <button
                            class="mt-10 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-150 ease-in-out hover:*:text-white hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <span>Como chegar</span>
                        </button>
                    </article>
                </div>

                <div class="mt-3 flex flex-col items-center justify-center">
                    <h3 class="font-semibold">Confirme sua presenca</h3>
                    <button
                        class="mt-3 flex items-center justify-center rounded-3xl border-2 border-amber-900 *:text-amber-900 px-3 py-2 gap-1 text-sm font-semibold hover:bg-amber-900 transition-all duration-150 ease-in-out hover:*:text-white hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4m1 4l2 2l4-4" />
                        </svg>
                        <span>Clique aqui</span>
                    </button>
                    <cite class="mt-3 font-bold italic text-sm text-red-500 underline">Convite não extensivo a
                        crianças!</cite>
                </div>
            </section>

            <div
                class="md:hidden bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#ffffff] absolute  h-[420px] w-full bottom-64">
            </div>
        </header>

        <section class="mt-24 md:mt-36 static md:w-screen flex flex-col items-center justify-center">
            <h3 class="text-3xl md:text-5xl mb-9 md:mb-12 text-amber-900">Faltam:</h3>
            <div class="text-xl md:*:text-6xl flex items-center gap-4  md:gap-10">
                <div class="flex flex-col gap-1 items-center justify-center"><span>50</span> <span>Dias</span> </div>
                <span>:</span>
                <div class="flex flex-col gap-1 items-center justify-center"><span>16</span> <span>Horas</span></div>
                <span>:</span>
                <div class="flex flex-col gap-1 items-center justify-center"><span>08</span> <span>Minutos</span></div>
                <span>:</span>
                <div class="flex flex-col gap-1 items-center justify-center"><span>08</span> <span>Segundos</span></div>
            </div>
        </section>

        <section
            class="w-screen md:h-screen flex flex-col md:flex-row pt-10   md:pt-24 px-6 md:px-20 mt-20 gap-16 relative">
            <img src="/images/marime3.jpg" alt="" class="md:w-2/5  md:h-[80vh] rounded">
            <div class="md:w-1/2">
                <h2 class="text-6xl md:text-8xl text-amber-900 text-center md:text-left">Nossa Historia</h2>
                <p class="text-justify text-2xl mt-5">A nossa história começou em 2017 com
                    uma apresentação especial de uma amiga
                    que, sem saber, estava a escrever o
                    primeiro parágrafo do nosso grande
                    amor. O nosso primeiro encontro foi
                    num palco de música e magia, um festival
                    de zouk, onde a vida decidiu que a nossa
                    melodia seria feita para ser dançada a
                    dois.

                    Encontrámos no abraço um do outro o
                    nosso lugar favorito no mundo. E agora,
                    convidamos-vos a celebrar connosco o
                    próximo movimento desta dança eterna:
                    O nosso casamento.
                </p>
            </div>
            <div class="absolute hidden md:block  md:bottom-40 right-1/4 text-amber-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3" />
                </svg>
            </div>
            <img src="/images/flower-2.png" alt=""
                class="w-[150px] md:w-[400px] absolute -bottom-[160px] md:bottom-2  right-3 md:right-16 -rotate-6 md:rotate-6">
            <img src="/images/flower-2.png" alt=""
                class="w-[150px] md:w-[400px] absolute left-3 -bottom-[165px] md:bottom-1 md:left-[43%] rotate-[85deg] md:rotate-[92deg]">
        </section>

        <footer class="w-screen md:px-32 relative mt-16 md:mt-40 flex justify-center">
            <img src="/images/flower-3.png" alt=""
                class="w-16 md:w-auto md:h-[500px] md:block absolute -left-1 -bottom-8 md:left-10 md:top-12 z-50">

            <div class="flex relative mt-48">
                <img src="/images/marime6.jpeg" alt="" class="hidden md:block w-96 h-[590px]">
                <img src="/images/marime7.jpeg" alt="" class=" w-96 h-[590px]">
                <img src="/images/marime5.jpeg" alt="" class="hidden md:block w-96 h-[590px]">
                <div class="absolute w-full h-full bg-black/30 flex justify-center pt-8 md:pt-3">
                    <h2 class="text-white text-6xl md:text-8xl">Esperamos por ti!</h2>]

                    <div class="absolute bottom-5 right-[40%] md:right-1/2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3" />
                        </svg>
                    </div>
                </div>

            </div>

            <img src="/images/flower-4.png" alt=""
                class="w-16 md:w-auto md:h-[500px] absolute md:right-10 -right-1 md:top-12 -bottom-8 z-50">
        </footer>
    </main>
</template>


<style scoped>
h2 {
    font-family: 'Edwardian Script ITC';
}
</style>