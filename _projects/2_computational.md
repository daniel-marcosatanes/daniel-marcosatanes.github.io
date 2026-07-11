---
layout: page
title: Computational Mechanism Analysis
description: Elucidating reaction mechanisms and selectivity origins using DFT and NCI analysis.
img: assets/img/projects_preview/dft_project.png
importance: 2
category: work
---

<!-- BANNER -->

<div class="row justify-content-center">
    <div class="col-12 col-md-8 text-center">
        <h3>Beyond Energy Profiles</h3>
        <p>
            Computational chemistry serves as a lens to see what happens in the flask.
            Using <strong>DFT (Density Functional Theory)</strong>, we model the precise transition states where bonds are made and broken.
        </p>
    </div>
</div>

<!-- VISOR 3D: BANNER LIMPIO -->
<div class="row mt-5 mb-5">
    <div class="col-12">
        <!-- Cambios: Fondo transparente, borde izquierdo grueso y borde fino alrededor -->
        <div class="d-flex align-items-center p-4 rounded" style="background-color: transparent; border: 1px solid var(--chem-teal); border-left: 6px solid var(--chem-teal);">

            <div class="mr-4 d-none d-sm-block">
                <i class="fa-solid fa-laptop-code fa-3x" style="color: var(--chem-teal);"></i>
            </div>

            <div>
                <h4 style="margin-bottom: 5px; font-weight: 700; color: var(--chem-teal);">Interactive Structure Database</h4>
                <p class="mb-2">Explore the full collection of computed intermediates and transition states from my research in an interactive 3D environment.</p>

                <a href="https://danielmarcosatanes.github.io/DMA_thesis-viewer/" target="_blank" style="color: var(--chem-teal); font-weight: 700; text-decoration: none;">
                    Open Thesis Viewer <i class="fa-solid fa-arrow-right ml-1"></i>
                </a>
            </div>

        </div>
    </div>
</div>

<!-- SECCIÓN DE COMPUTATIONAL TOOLBOX -->
<div class="row mt-5">
    <div class="col-12 text-center mb-4">
        <h3>My Computational Toolbox</h3>
    </div>
</div>

<div class="row">
    <!-- 1. GIBBS ENERGY -->
    <div class="col-12 col-md-6 mb-4">
        <div class="card h-100" style="border: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <img src="/assets/img/gibbs.png" class="card-img-top p-2" style="height: 180px; object-fit: contain; background-color: var(--global-bg-color);" alt="Reaction Profile">
            <div class="card-body">
                <h5 class="card-title" style="color: var(--chem-teal);">Reaction Profiles</h5>
                <p class="card-text small">Mapping full energy landscapes to identify rate-determining steps and selectivities.</p>
            </div>
        </div>
    </div>

    <!-- 2. NON-COVALENT INTERACTIONS -->
    <div class="col-12 col-md-6 mb-4">
        <div class="card h-100" style="border: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <img src="/assets/img/nci.png" class="card-img-top p-2" style="height: 180px; object-fit: contain; background-color: var(--global-bg-color);" alt="NCI Plot">
            <div class="card-body">
                <h5 class="card-title" style="color: var(--chem-teal);">NCI Analysis</h5>
                <p class="card-text small">Visualizing weak forces (dispersion, H-bonds) that dictate ligand docking.</p>
            </div>
        </div>
    </div>

    <!-- 3. ORBITAL ANALYSIS -->
    <div class="col-12 col-md-6 mb-4">
        <div class="card h-100" style="border: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <img src="/assets/img/nbo.png" class="card-img-top p-2" style="height: 180px; object-fit: contain; background-color: var(--global-bg-color);" alt="NBO Orbitals">
            <div class="card-body">
                <h5 class="card-title" style="color: var(--chem-teal);">NBO Analysis</h5>
                <p class="card-text small">Studying orbital overlaps and electronic transfers in transition states.</p>
            </div>
        </div>
    </div>

    <!-- 4. CONFORMATIONAL SEARCH -->
    <div class="col-12 col-md-6 mb-4">
        <div class="card h-100" style="border: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <img src="/assets/img/crest.png" class="card-img-top p-2" style="height: 180px; object-fit: contain; background-color: var(--global-bg-color);" alt="Conformational Sampling">
            <div class="card-body">
                <h5 class="card-title" style="color: var(--chem-teal);">Conformational Sampling</h5>
                <p class="card-text small">Exploring flexible ligand dynamics using CREST/xTB molecular dynamics.</p>
            </div>
        </div>
    </div>
</div>
