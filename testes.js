const radios = document.querySelectorAll('input[name="apresentacao"]');
        const outroDiv = document.getElementById('outroDiv');
        const musicaDiv = document.getElementById('musicaDiv');

        function atualizarDivs() {
            const selecionado = document.querySelector('input[name="apresentacao"]:checked').value;
            if (selecionado === 'outro') {
                outroDiv.style.display = 'block';
                musicaDiv.style.display = 'none';
            } else {
                outroDiv.style.display = 'none';
                musicaDiv.style.display = 'block';
            }
        }

        radios.forEach(radio => {
            radio.addEventListener('change', atualizarDivs);
        });



    // Importações Firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

    // Configuração do Firebase
     const firebaseConfig = {
        apiKey: "AIzaSyCuEpu6-I7c9PGSe-OOsNGcphrswVoNqjk",
        authDomain: "sarau-bac13.firebaseapp.com",
        projectId: "sarau-bac13",
        storageBucket: "sarau-bac13.firebasestorage.app",
        messagingSenderId: "172569092550",
        appId: "1:172569092550:web:f13377a51bbbda6be6d2c7",
        measurementId: "G-NQSMZWL4P3"
  };
    // Inicialização
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    // Captura do formulário
    const form = document.getElementById("formInscricao");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Pegar valores
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("tel").value;
        const serie = document.getElementById("serie").value;
        const apresentacao = document.querySelector("input[name='apresentacao']:checked")?.value || "";
        const musica = document.getElementById("musicaInput").value;
        const outraApresentacao = document.getElementById("outroInput").value;
        const turma = document.getElementById("participantes").checked;
        const numeroParticipantes = document.getElementById("numero").value;
        const nomesParticipantes = document.getElementById("nomepartipantesInput").value;

        try {
            // Salvar no Firestore
            await addDoc(collection(db, "inscricoes"), {
                nome,
                telefone,
                serie,
                apresentacao,
                musica,
                outraApresentacao,
                turma,
                numeroParticipantes,
                nomesParticipantes,
                criadoEm: new Date()
            });

            alert("Inscrição enviada com sucesso!");
            form.reset();
        } catch (error) {
            console.error("Erro ao salvar inscrição: ", error);
            alert("Erro ao enviar inscrição, tente novamente.");
        }
    });
    
const parames = new URLSearchParams(window.location.search);
const musicaURL = parames.get("Nome_Musica");
if (musicaURL) document.getElementById("musicaInput").value = musicaURL;