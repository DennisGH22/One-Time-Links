<template>
    <div class="data-wrapper">    
        <div class="secret-data">
            <div class="loader skeleton-textarea"></div>
            <div class="loader skeleton-btn"></div>
        </div>
        <div class="warning">
            <div class="loader skeleton-h1"></div>
            <div class="loader skeleton-p"></div>
            <div class="loader skeleton-p"></div>
            <div class="loader skeleton-p"></div>
            <div class="loader skeleton-p"></div>
            <div class="loader skeleton-p"></div>
            <div class="loader skeleton-p"></div>
        </div>
    </div>
</template>

<style scoped>
    .skeleton-textarea {
        background-color: var(--clr-skeleton);
        overflow: hidden;
        margin-block-start: 30px;
        width: 90%;
        height: 200px;
        border-radius: 10px;
    }

    .skeleton-btn {
        background-color: var(--clr-skeleton);
        overflow: hidden;
        margin-block-start: 10px;
        padding: 24px 50px;
        border-radius: 10px;
    }

    .skeleton-h1 {
        background-color: var(--clr-skeleton);
        margin-inline: auto;
        overflow: hidden;
        width: 200px;
        height: 50px;
        border-radius: 10px;
    }

    .skeleton-p {
        background-color: var(--clr-skeleton);
        margin-inline: auto;
        overflow: hidden;
        width: 90%;
        margin-block-start: 30px;
        padding-block-start: 10px;
        border-radius: 10px;
    }

    .skeleton-p:nth-child(3),
    .skeleton-p:nth-child(7) {
        margin-block-start: 5px;
        width: 25%;
    }

    .skeleton-p:nth-child(5),
    .skeleton-p:nth-child(6) {
        margin-block-start: 5px;
    }

    .loader {
        animation: fadeIn ease 1.5s infinite;
        -webkit-animation: fadeIn ease 1.5s infinite;
        -moz-animation: fadeIn ease 1.5s infinite;
        -o-animation: fadeIn ease 1.5s infinite;
        -ms-animation: fadeIn ease 1.5s infinite;
    }

    .loader::after {
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(255, 255, 255, .1) 60%,
            rgba(255, 255, 255, 0)
        );
        animation: shine 1.2s ease infinite;
    }

    @keyframes shine {
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: .75;
        }

        100% {
            opacity: 1;
        }
    }

    @media only screen and (min-width: 1024px) {
        .skeleton-textarea{
            margin-block-start: 0;
            width: 100%;
        }

        .skeleton-btn {
            margin-inline-end: auto;
        }

        .skeleton-h1 {
            margin-inline-start: 20px;
        }

        .skeleton-p {
            margin-inline-start: 20px;
            width: 100%;
        }
    }

</style>