class ListNode {
  constructor(nodeOrvalue) {
    if (nodeOrvalue instanceof ListNode) {
      this.value = nodeOrvalue.value;
      this.next = nodeOrvalue.next;
    } else {
      this.value = nodeOrvalue;
      this.next = null;
    }
  }
}

module.exports = {
  ListNode,
};
