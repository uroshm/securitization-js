package securitize.engine;

public class Amortization {

  public static double calculateAmortization(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double amortization = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return amortization;
  }

  public static double calculateInterest(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double interest = principal * r * n;
    return interest;
  }

  public static double calculateTotalPayment(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double totalPayment = principal * r * n + principal;
    return totalPayment;
  }

  public static double calculateTotalInterest(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double totalInterest = principal * r * n;
    return totalInterest;
  }

  public static double calculateTotalAmortization(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double totalAmortization = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) * n;
    return totalAmortization;
  }

  public static double calculateTotalInterestRate(double principal, double rate, int period) {
    double r = rate / 12;
    double n = period * 12;
    double totalInterestRate = principal * r * n / principal;
    return totalInterestRate;
  }
}
