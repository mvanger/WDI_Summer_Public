require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('Bank of America')}

  describe ".new" do
    it "creates a new Bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq 'Bank of America'
    end
  end

  describe "#create_account" do
    it "creates an account" do
      bank.create_account('Mike', 1000000)
      expect(bank.accounts['Mike']).to eq 1000000
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "deposit" do
    it "adds a deposit" do
      bank.create_account('Mike', 1000000)
      bank.deposit('Mike', 500)
      expect(bank.accounts['Mike']).to eq 1000500
    end
  end

  describe "withdraw" do
    it "withdraws a withdrawal" do
      bank.create_account('Mike', 1000000)
      bank.withdraw('Mike', 500)
      expect(bank.accounts['Mike']).to eq 999500
    end
    it "doesn't go below zero" do
      bank.create_account('Mike', 400)
      bank.withdraw('Mike', 500)
      expect(bank.accounts['Mike']).to eq 400
    end
  end

  describe "balance" do
    it "shows the total balance" do
      bank.create_account('Mike', 100)
      expect(bank.balance('Mike')).to eq 100
    end
  end
end




