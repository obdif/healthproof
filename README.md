# HealthProof - Secure Health Data Sharing with zkPass

HealthProof is a privacy-focused health data sharing platform that leverages zero-knowledge proofs to enable secure and confidential sharing of medical information. Built with React, TypeScript, and zkPass, it allows users to share verifiable health data without exposing sensitive information.

<!-- ![HealthProof Screenshot](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070) -->

## 🚀 Features

- **Zero-Knowledge Proofs**: Share health data without revealing sensitive information
- **Secure Verification**: Cryptographic proofs ensure data authenticity
- **Privacy-First Design**: Only share what's necessary with healthcare providers
- **User-Friendly Interface**: Simple and intuitive data input and proof generation
- **Instant Verification**: Real-time proof verification for healthcare providers
- **Easy Export**: Download or copy proofs for sharing

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Zero-Knowledge Proofs**: zkPass + snarkjs
- **Build Tool**: Vite

## 🏃‍♂️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/obdif/healthproof.git
cd healthproof
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 💡 How It Works

1. **Input Health Data**
   - Enter your blood type
   - List any allergies
   - Specify medical conditions

2. **Generate Proof**
   - Click "Generate Zero-Knowledge Proof"
   - Wait for proof generation
   - Receive cryptographic proof

3. **Share Securely**
   - Copy or download the proof
   - Share with healthcare providers
   - Verify proof authenticity

## 🔒 Privacy Features

- **Data Hashing**: All health data is hashed with a random salt
- **Zero-Knowledge**: Only proof validity is shared, not actual data
- **Verification Keys**: Healthcare providers can verify without accessing data
- **Secure Storage**: No sensitive data is stored on servers

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [zkPass](https://zkpass.org) for zero-knowledge proof technology
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Lucide](https://lucide.dev) for beautiful icons
- [React](https://reactjs.org) for the UI framework

## 🔗 Links

- [Live Demo](https://demo.yourdomain.com)

---

Built with ❤️ using zkPass technology