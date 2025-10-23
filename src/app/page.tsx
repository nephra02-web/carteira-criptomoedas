"use client"

import { useState } from 'react'
import { ArrowUpRight, ArrowDownLeft, Plus, Send, QrCode, Copy, Eye, EyeOff, Wallet, TrendingUp, Clock, Star } from 'lucide-react'

export default function MRWallet() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('wallet')

  const cryptoAssets = [
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.00234567', value: '$1,247.89', change: '+5.2%', color: 'text-orange-500' },
    { symbol: 'ETH', name: 'Ethereum', balance: '1.45678', value: '$3,456.78', change: '+3.1%', color: 'text-blue-500' },
    { symbol: 'BNB', name: 'Binance Coin', balance: '12.5', value: '$2,890.45', change: '-1.8%', color: 'text-yellow-500' },
    { symbol: 'ADA', name: 'Cardano', balance: '1,250', value: '$567.89', change: '+7.3%', color: 'text-blue-600' },
    { symbol: 'SOL', name: 'Solana', balance: '45.67', value: '$1,890.23', change: '+12.5%', color: 'text-purple-500' },
    { symbol: 'DOT', name: 'Polkadot', balance: '89.12', value: '$678.45', change: '+2.9%', color: 'text-pink-500' }
  ]

  const nftCollection = [
    { name: 'Bored Ape #1234', collection: 'BAYC', value: '15.2 ETH', image: '🐵' },
    { name: 'CryptoPunk #5678', collection: 'CryptoPunks', value: '8.7 ETH', image: '👾' },
    { name: 'Azuki #9012', collection: 'Azuki', value: '3.4 ETH', image: '🎌' }
  ]

  const transactions = [
    { type: 'received', asset: 'BTC', amount: '+0.00123456', value: '+$678.90', time: '2 min ago', status: 'confirmed' },
    { type: 'sent', asset: 'ETH', amount: '-0.5', value: '-$1,234.56', time: '1 hour ago', status: 'confirmed' },
    { type: 'received', asset: 'SOL', amount: '+25.0', value: '+$890.45', time: '3 hours ago', status: 'confirmed' },
    { type: 'sent', asset: 'BNB', amount: '-2.5', value: '-$567.89', time: '1 day ago', status: 'confirmed' }
  ]

  const totalBalance = '$10,731.69'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">MR Wallet</h1>
                <p className="text-gray-400 text-sm">Multi-Chain Crypto Wallet</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <QrCode className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Wallet className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-purple-100 text-sm mb-1">Total Portfolio Value</p>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">
                  {showBalance ? totalBalance : '••••••'}
                </h2>
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 text-sm">+$234.56 (2.24%)</p>
              <p className="text-purple-100 text-xs">Last 24h</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center gap-2 transition-colors">
              <ArrowDownLeft className="w-5 h-5" />
              <span className="font-medium">Receive</span>
            </button>
            <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center gap-2 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
              <span className="font-medium">Send</span>
            </button>
            <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center gap-2 transition-colors">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Buy</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-black/20 backdrop-blur-sm rounded-xl p-1 mb-6">
          {[
            { id: 'wallet', label: 'Assets', icon: Wallet },
            { id: 'nfts', label: 'NFTs', icon: Star },
            { id: 'history', label: 'History', icon: Clock }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'wallet' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">Your Assets</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Add Token
              </button>
            </div>
            {cryptoAssets.map((asset, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 hover:bg-black/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center ${asset.color}`}>
                      <span className="font-bold text-sm">{asset.symbol}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{asset.name}</p>
                      <p className="text-gray-400 text-sm">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{asset.value}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400 text-sm">{asset.balance} {asset.symbol}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        asset.change.startsWith('+') 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {asset.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'nfts' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">NFT Collection</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nftCollection.map((nft, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 hover:bg-black/30 transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-3 flex items-center justify-center text-4xl">
                    {nft.image}
                  </div>
                  <h4 className="text-white font-medium mb-1">{nft.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{nft.collection}</p>
                  <p className="text-purple-400 font-medium">{nft.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">Transaction History</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View All
              </button>
            </div>
            {transactions.map((tx, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 hover:bg-black/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'received' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {tx.type === 'received' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {tx.type === 'received' ? 'Received' : 'Sent'} {tx.asset}
                      </p>
                      <p className="text-gray-400 text-sm">{tx.time} • {tx.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      tx.type === 'received' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {tx.amount}
                    </p>
                    <p className="text-gray-400 text-sm">{tx.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 md:hidden">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Wallet, label: 'Wallet' },
            { icon: TrendingUp, label: 'Markets' },
            { icon: Send, label: 'Send' },
            { icon: Star, label: 'Favorites' }
          ].map((item, index) => (
            <button key={index} className="flex flex-col items-center gap-1 p-2">
              <item.icon className="w-5 h-5 text-gray-400" />
              <span className="text-xs text-gray-400">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}