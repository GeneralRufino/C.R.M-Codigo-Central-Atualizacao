import React, { useState } from 'react';
import Produtos from './Produtos';
import Estoque from './Estoque';
import Fornecedores from './Fornecedores';

function DashboardPage() {
    const [telaAtiva, setTelaAtiva] = useState('produtos')

    return (
        <div className = "dashboard-layout">

        {/* Menu lateral */}
        <aside className = "sidebar">
            <div className = "sidebar-logo">
                <img src="" alt="Batmotor logo" />
            </div>

            <nav className = "sidebar-menu">
                <h3>Menu Principal</h3>
                <ul>
                    <li className = {telaAtiva === 'overview' ? 'active' : ''} onClick = {() => setTelaAtiva('overview')}>
                        Dashboard Overview
                    </li>
                    <li className = {telaAtiva === 'produtos' ? 'active' : ''} onClick = {() => setTelaAtiva('produtos')}>
                        Produtos
                    </li>
                    <li className = {telaAtiva === 'estoque' ? 'active' : ''} onClick = {() => setTelaAtiva('estoque')}>
                        Estoque
                    </li>
                    <li className = {telaAtiva === 'fornecedores' ? 'active' : ''} onClick = {() => setTelaAtiva('fornecedores')}>
                        Fornecedores
                    </li>
                </ul>
            </nav>

        {/* Esqueleto do Avatar */}
        <div className = "user-profile">
            <img src="" alt="Avatar" className = "avatar-img" />
            <div>
                <p>Exemplo</p>
                <p>Admin</p>
            </div>
        </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className = "main-content">
            <header className = "top-header">
                <h2>{telaAtiva.toUpperCase()}</h2>
            </header>

        <div className = "content-area">
            {telaAtiva === 'overview' && (
                <div>
                    <p>Tela de Dashboard Overview</p>
                </div>
            )}

            {telaAtiva === 'produtos' && <Produtos />}

            {telaAtiva === 'estoque' && <Estoque />}

            {telaAtiva === 'fornecedores' && <Fornecedores />}

        </div>

    </main>

</div>
    )

}

export default DashboardPage;