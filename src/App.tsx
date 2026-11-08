import React, { useState } from 'react';
import { Shield, Crown, Swords, Coins, Lock, CheckCircle, Ticket, Wrench, Send, Server, Users } from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState<'inicio' | 'loja' | 'suporte' | 'admin'>('inicio');
  const [maintenance, setMaintenance] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [sentCode, setSentCode] = useState(false);
  const [inputCode, setInputCode] = useState('');

  const [products] = useState([
    { id: '1', name: 'VIP', price: 14, color: 'blue', desc: ['Tag VIP exclusiva no chat', 'Comandos especiais /kit vip', 'Prioridade de entrada'] },
    { id: '2', name: 'PRO', price: 16, color: 'purple', desc: ['Vantagens do VIP inclusas', 'Tag PRO destacada', 'Até 3 homes configuradas'] },
    { id: '3', name: 'VIP PLUS', price: 18, color: 'cyan', desc: ['Vantagens VIP & PRO', 'Kit mensal exclusivo', 'Até 5 homes configuradas'] },
    { id: '4', name: 'PRIME', price: 20, color: 'fuchsia', desc: ['Todos os benefícios anteriores', 'Acesso a eventos antecipados', 'Caixa misteriosa diária'] },
    { id: '5', name: 'ATLAS', price: 25, color: 'amber', desc: ['O cargo máximo do servidor', 'Tag suprema personalizada', 'Todos os comandos liberados'] }
  ]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [playerNick, setPlayerNick] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPix, setShowPix] = useState(false);

  const [supportTickets, setSupportTickets] = useState([
    { id: 1, user: 'Steve_Gamer', message: 'Meu VIP não caiu ainda!', staffReply: 'Verificando pagamento, 1 min.' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'ATLAS10') {
      setDiscount(0.1);
      alert('Cupom ATLAS10 aplicado com 10% de desconto!');
    } else {
      alert('Cupom inválido.');
    }
  };

  const handleAdminLogin = () => {
    if (adminPass === 'Masteratlassmp') {
      setSentCode(true);
      alert('Código de verificação enviado para o e-mail do Master Staff (Simulação: digite 8899)');
    } else {
      alert('Senha incorreta! Use Masteratlassmp');
    }
  };

  const verifyCode = () => {
    if (inputCode === '8899') {
      setAdminAuth(true);
    } else {
      alert('Código incorreto!');
    }
  };

  if (maintenance && !adminAuth) {
    return (
      <div className="min-h-screen bg-[#050b14] text-white flex flex-col items-center justify-center p-4">
        <Wrench className="w-16 h-16 text-amber-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-black mb-2">SERVIDOR EM MANUTENÇÃO</h1>
        <p className="text-slate-400 text-sm mb-6">A loja e o servidor encontram-se temporariamente fechados para melhorias.</p>
        <button onClick={() => setTab('admin')} className="text-xs text-blue-400 underline">Acesso Restrito Staff</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col justify-between font-sans">
      <header className="sticky top-0 z-50 bg-[#050b14]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-black text-xl text-white shadow-lg">T</div>
            <div>
              <span className="font-black text-xl tracking-wider block leading-none">ATLAS</span>
              <span className="text-xs font-bold text-blue-400 tracking-widest">SMP</span>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <button onClick={() => setTab('inicio')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === 'inicio' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Início</button>
            <button onClick={() => setTab('loja')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === 'loja' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Loja</button>
            <button onClick={() => setTab('suporte')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === 'suporte' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Suporte</button>
            <button onClick={() => setTab('admin')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === 'admin' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Painel Master</button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        {tab === 'inicio' && (
          <div className="text-center max-w-4xl mx-auto py-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6">
              <Shield className="w-4 h-4" /> Survival PvP Premium
            </div>
            <h1 className="text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
              BEM-VINDO AO ATLAS SMP
            </h1>
            <p className="text-slate-300 text-lg mb-12">Onde cada escolha define seu destino no servidor.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526]">
                <Shield className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-1">Clãs & Guerras</h3>
                <p className="text-sm text-slate-400">Construa sua base e domine territórios.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526]">
                <Swords className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-1">PvP Competitivo</h3>
                <p className="text-sm text-slate-400">Arenas equilibradas e recompensas por bounties.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526]">
                <Coins className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-1">Economia Ativa</h3>
                <p className="text-sm text-slate-400">Mercado gerido totalmente pelos jogadores.</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'loja' && (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-black uppercase mb-2">LOJA OFICIAL DE KITS</h1>
              <p className="text-slate-400 text-sm">Compre com Pix, entrega automática instantânea no servidor e anúncio global!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="w-8 h-8 text-blue-400" />
                      <div>
                        <h3 className="text-2xl font-bold">{p.name}</h3>
                        <span className="text-xs text-blue-400 font-semibold">PACOTE VIP</span>
                      </div>
                    </div>
                    <div className="text-3xl font-black mb-4">R$ {p.price},00</div>
                    <ul className="space-y-2 text-xs text-slate-300 mb-6 border-t border-slate-800 pt-4">
                      {p.desc.map((d, i) => (<li key={i}>✓ {d}</li>))}
                    </ul>
                  </div>
                  <button onClick={() => setSelectedProduct(p)} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs uppercase transition">
                    Comprar Agora
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'suporte' && (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-slate-800 bg-[#0a1526]">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><Ticket className="w-5 h-5 text-blue-400" /> Chat de Suporte Multistaff</h2>
            <p className="text-xs text-slate-400 mb-6">Envie sua dúvida ou problema. Qualquer membro da Staff pode responder em tempo real.</p>
            
            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
              {supportTickets.map((t, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#050b14] border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span className="font-bold text-blue-400">{t.user}</span>
                    <span>Hoje</span>
                  </div>
                  <p className="text-sm mb-2">{t.message}</p>
                  {t.staffReply && (
                    <div className="pl-4 border-l-2 border-green-500 text-xs text-green-400 mt-2">
                      <span className="font-bold block text-slate-300">Staff Resposta:</span>
                      {t.staffReply}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escreva sua dúvida..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                className="flex-1 bg-[#050b14] border border-slate-800 rounded-xl px-4 py-3 text-sm"
              />
              <button onClick={() => { if(newMsg) { setSupportTickets([...supportTickets, { id: Date.now(), user: 'Jogador', message: newMsg, staffReply: '' }]); setNewMsg(''); }}} className="px-6 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs">
                Enviar
              </button>
            </div>
          </div>
        )}

        {tab === 'admin' && (
          <div className="max-w-4xl mx-auto">
            {!adminAuth ? (
              <div className="p-8 rounded-2xl border border-slate-800 bg-[#0a1526] max-w-md mx-auto text-center">
                <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Painel Master Admin</h2>
                <p className="text-xs text-slate-400 mb-6">Master User: master | Master Senha: Masteratlassmp</p>
                
                {!sentCode ? (
                  <>
                    <input
                      type="password"
                      placeholder="Senha Master"
                      value={adminPass}
                      onChange={(e) => setAdminPass(e.target.value)}
                      className="w-full bg-[#050b14] border border-slate-800 rounded-xl p-3 mb-4 text-sm"
                    />
                    <button onClick={handleAdminLogin} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs uppercase">
                      Continuar (Enviar 2FA por E-mail)
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-green-400 mb-3">Código enviado para o e-mail da Staff! (Use: 8899)</p>
                    <input
                      type="text"
                      placeholder="Código de 4 dígitos"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="w-full bg-[#050b14] border border-slate-800 rounded-xl p-3 mb-4 text-sm text-center tracking-widest font-bold"
                    />
                    <button onClick={verifyCode} className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-xs uppercase">
                      Confirmar e Entrar
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526] flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-1">Controle de Servidor & Manutenção</h2>
                    <p className="text-xs text-slate-400">Ative o modo manutenção para bloquear a loja e fechar o servidor temporariamente.</p>
                  </div>
                  <button onClick={() => setMaintenance(!maintenance)} className={`px-6 py-3 rounded-xl font-bold text-xs uppercase ${maintenance ? 'bg-red-600' : 'bg-green-600'}`}>
                    {maintenance ? 'Servidor Desligado (Manutenção Ativa)' : 'Servidor Ligado (Online)'}
                  </button>
                </div>

                <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1526]">
                  <h3 className="font-bold mb-4">Gerenciamento de Cupons & Histórico de Vendas</h3>
                  <p className="text-xs text-slate-400 mb-4">Cupom ativo de teste: <span className="text-blue-400 font-bold">ATLAS10</span> (10% de desconto)</p>
                  <div className="border-t border-slate-800 pt-4 text-sm text-slate-400">
                    Nenhum pedido pendente de entrega automática RCON no momento.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {selectedProduct && !showPix && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a1526] border border-slate-800 w-full max-w-md rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-1">Finalizar Compra - {selectedProduct.name}</h3>
            <p className="text-xs text-slate-400 mb-4">Valor base: R$ {selectedProduct.price},00</p>
            
            <label className="block text-xs font-bold text-slate-300 mb-1">NICK NO MINECRAFT</label>
            <input
              type="text"
              placeholder="Seu Nick ex: Steve"
              value={playerNick}
              onChange={(e) => setPlayerNick(e.target.value)}
              className="w-full bg-[#050b14] border border-slate-800 rounded-xl p-3 text-sm mb-4 text-white"
            />

            <label className="block text-xs font-bold text-slate-300 mb-1">CUPOM DE DESCONTO</label>
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Ex: ATLAS10"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 bg-[#050b14] border border-slate-800 rounded-xl p-3 text-sm uppercase text-white"
              />
              <button onClick={applyCoupon} className="px-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold">Aplicar</button>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setSelectedProduct(null)} className="flex-1 py-3 border border-slate-800 rounded-xl text-xs font-bold text-slate-400">Cancelar</button>
              <button onClick={() => {
                if(!playerNick) { alert('Digite seu nick!'); return; }
                setShowPix(true);
              }} className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-bold text-white">Gerar Pix</button>
            </div>
          </div>
        </div>
      )}

      {showPix && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a1526] border border-slate-800 w-full max-w-md rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Pix Gerado com Sucesso!</h3>
            <p className="text-xs text-slate-400 mb-4">Assim que o pagamento for aprovado, o VIP será entregue automaticamente no seu nick e anunciado para todo o servidor.</p>
            <div className="w-48 h-48 bg-white mx-auto rounded-xl flex items-center justify-center mb-4 text-black font-bold text-xs p-4 border-4 border-blue-500">
              [QR CODE PIX AUTOMÁTICO]
            </div>
            <p className="text-xs text-blue-400 font-bold mb-6">Jogador: {playerNick} | Valor: R$ {selectedProduct.price * (1 - discount)},00</p>
            <button onClick={() => { setShowPix(false); setSelectedProduct(null); alert('Pagamento simulado com sucesso! VIP entregue via RCON e anunciado no chat global.'); }} className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl text-xs font-bold">
              Simular Pagamento Aprovado
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 ATLAS SMP. Todos os direitos reservados.
      </footer>
    </div>
  );
}
