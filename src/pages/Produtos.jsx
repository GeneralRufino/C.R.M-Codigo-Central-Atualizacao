import React from 'react';

// MOCK DATA com dados falsos só para montar o esqueleto visual

const produtosMock = [
    { id: 1, nome: 'Bateria Íon Lítion', codigo: '48MLS100', valor: 'R$1.850,65', categoria: 'Baterias', fornecedor: 'PowerCell S.A', status: 'Ativo' },
    { id: 2, nome: 'Carregador Digital', codigo: '48MLS101', valor: 'R$1.200,00', categoria: 'Acessórios', fornecedor: 'Energia Forte LTDA', status: 'Ativo' },
    { id: 3, nome: 'Motor Elétrico', codigo: '48MLS102', valor: 'R$1.500,50', categoria: 'Motores', fornecedor: 'Baterias Brasil S.A', status: 'Inativo' }
];

function Produtos() {
    return (
        <div className = "produtos-container">

        {/* Cabeçalho da área de produtos */}
        <div className = "produtos-header">
            <h3>Inventário de Produtos</h3>
            <div className = "produtos-actions">
                <button className = "btn-secondary">Importar</button>
                <button className = "btn-secondary">Exportar</button>
                <button className = "btn-primary">+ Adicionar Produtos</button>
            </div>
        </div>

        {/* Cards */}
        <div className = "sumary-cards">
            {/* Valores de acordo com a imagem protótipo, só para representação */}
            <div className = "card">Estoque Total: 24.800</div>
            <div className="card">Produtos Ativos: 80</div>
            <div className="card">Produtos Inativos: 6</div>
            <div className="card">Fora de Estoque: 3</div>
        </div>

        {/* Tabela de produtos */}
        <div className = "table-container">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Código</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Fornecedor</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key = {produto.id}>
                        <td>{produto.nome}</td>
                        <td>{produto.codigo}</td>
                        <td>{produto.valor}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.fornecedor}</td>
                        <td>
                        <span className = {produto.status === 'Ativo' ? 'status-green' : 'status-red'}>{produto.status}</span>
                        </td>
                        <td>
                            <button className="btn-edit">📝</button>
                            <button className="btn-delete">🗑️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
    );
}

export default Produtos;